const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: true,
  origins: ["http://localhost:8080"],
});

const { getQuestions } = require("./helpers");

let players = [],
  counter = 0;

let error = true;
const questions = getQuestions("./data/question.json");

io.on("connection", (socket) => {
  // user join
  socket.on("join", (name) => {
    // guard for duplicated login
    const filteredPlayer = players.filter((player) => player.id === socket.id);
    if (filteredPlayer.length === 0) {
      players.push({
        id: socket.id,
        name,
        isReady: false,
        answer: true,
      });
    }
    io.emit("joined", {
      userId: socket.id,
      players,
    });
  });

  // user ready
  socket.on("ready", () => {
    players.forEach((player) => {
      if (player.id === socket.id) player.isReady = true;
    });

    if (players.every((player) => player.isReady)) {
      io.emit("gameOn", {
        players,
        question: questions[counter],
      });
    } else {
      io.emit("players", players);
    }
  });

  // user answer
  socket.on("answer", (answer) => {
    players.forEach((player) => {
      if (player.id === socket.id) player.answer = answer;
    });
    io.emit("players", players);
  });

  // when round is timeout
  socket.on("timeOut", (trueAnswer) => {
    if (error) {
      error = false;
      players = players.filter((player) => player.answer === trueAnswer);

      // check remain player
      if (players.length === 1) {
        io.emit("winner", players[0].name);
        players = [];
        counter++;
      } else {
        counter++;
        error = true;
        io.emit("gameOn", {
          question: questions[counter],
          players,
        });
      }
    }
  });

  // when any user disconnect
  socket.on("disconnect", () => {
    const userIndex = players.findIndex((player) => player.id === socket.id);
    players.splice(userIndex, 1);
    socket.emit("players", players);
  });
});

httpServer.listen(3000);
