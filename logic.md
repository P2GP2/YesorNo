## General flow

```
1. User masuk ke waiting room (dapat nama 01, 02, ..., 10 )
2. user klik ready
3. jika semua user sudah ready maka game mulai
4. user pilih jawaban yes / no
5. jika waktu (7 detik) telah habis maka sistem akan mengevaluasi jawaban
6. user dengan jawaban salah akan keluar (jadi spectator)
7. jika user tersisa = 1 || 10 pertanyaan habis maka user tersebut menang
   jika belum repeat dari step 4
```

## Client

### List component:

```
- Button Ready
- Board (bisa dikasih data untuk mengenali dia board yes or no)
  Child:
  - Avatar (tinggal di v-for)
  - Button (Yes / No)
    -> bisa pakai v-if (if yes then color green, else red)
- Question
- Timer
```

### Socket event (client):

```
- Intial state
  {
    userId: '',
    isGame: false,
    isAlive: false,
    players: []
  }
- Trigger "join"
  - send name to server
  - on "joined" store state palyers and userId
- Trigger "ready"
  - on "players" store state palyers
- On "gameOn"
  - fill store question with question sent by server
  - change state isGame to true, game will be start
- Trigger "answer" with data ({answer}) related button clicked
- Trigger "timeOut" with trueAnswer data
- On "newRound"
  - update state question and players
  - update user isAlive state on client
  - (on view) if current player is not alive, they will be spectate
- On "winner"
  - show modal winner
  - change state to initial state
```

## Server

### Data:

- Question <Array>

```json
[
  {
    "question": "string",
    "answer": "string"
  },
  {
    "question": "string",
    "answer": "string"
  }
]
```

- Player <Array>

```json
[
  {
    "id": "string",
    "initial": "string",
    "isReady": "booelan",
    "isAlive": "boolean",
    "answer": "boolean"
  },
  {
    "id": "string",
    "initial": "string",
    "isReady": "booelan",
    "isAlive": "boolean",
    "answer": "boolean"
  }
]
```

### Socket event (server):

```
- On "connection"
  - append new user with basic state
  - send (broadcast) "players" with data list player
- On "ready"
  - change ready state of user
  - check all ready state of player list,
    if all player ready, send (broadcast) "gameOn" with first question
- On "answer"
  - change answer state to related user
- On "timeOut"
  - check all player, if answer is wrong, change isAlive state of player
  - count listPlayer,
    - if only 1 player, send (broadcast) winner user
    - else, send (broadcast) "newRound" with data {question, listPlayer}
```
