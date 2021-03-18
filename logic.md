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
- Trigger "connection"
  - on "getId" store state list player
  - and if user's state id is empty (''), fill with last player id
  - tampung list player on WaitingList array
- Trigger "ready" with state id
- On "startGame"
  - fill store question with question sent by server
  - fill store ListPlayer array with WaitingList array
  - when ListPlayer is filled, game will be start
- Trigger "answer" with data ({id, answer}) related button clicked
- Trigger "timeOut"
- On "newRound"
  - update state question and listPlayer
  - (on view) if current player is not alive, they can't push button
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
    "isReady": "booelan",
    "isAlive": "boolean",
    "answer": "boolean"
  },
  {
    "id": "string",
    "isReady": "booelan",
    "isAlive": "boolean",
    "answer": "boolean"
  }
]
```

### Socket event (server):

```
- On "connection"
  - check last id on Player data
  - append new user with basic state
  - send (broadcast) "getId" with data list player
- On "ready"
  - change ready state of user with related id
  - check all ready state of player list,
    if all player ready, send "startGame" with first
- On "answer"
  - change answer state to related id
- On "timeOut"
  - check all player, if answer is wrong, change isAlive state of player
  - count listPlayer,
    - if only 1 player, send (broadcast) winner user
    - else, send (broadcast) "newRound" with data {question, listPlayer}
```
