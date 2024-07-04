import { createStore } from 'vuex'

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const [a, b, c] of lines) {
    const value = squares[a];
    // 先確保value不為空,然後確認是否為連線組合排列
    if (value && value === squares[b] && value === squares[c]) {
      return { winner: value, isGameOver: true };
    }
  }
  // 如果都沒有連線,就等於沒有贏家,平局遊戲結束
  const isDraw = squares.every(square => square !== '');
  return { winner: null, isGameOver: isDraw };
};

export default createStore({
  state: {
    player: 'X',
    board: [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],
    winner: null,
    innings: 1,
    score: {
      X: 0,
      O: 0
    },
    gameWon: null,
    gameStarted: false,
    isGameOver: false,
  },
  getters: {
  },
  
  mutations: {
    // 定義 mutation 來更新 board 和 player
    makeMove(state, { x, y }) {
      // 遊戲開始
      state.gameStarted = true;
      if (state.isGameOver) return;
      if (state.board[x][y] !== '') return;

      state.board[x][y] = state.player;

      const result = calculateWinner(state.board.flat());
      state.winner = result.winner;
      state.isGameOver = result.isGameOver;

      if (state.isGameOver) {
        if (state.winner) {
          state.score[state.winner] += 1;
        }

        if (state.score.X === 2) {
          state.gameWon = 'X';
        } else if (state.score.O === 2) {
          state.gameWon = 'O';
        }
      } else {
        state.player = state.player === 'X' ? 'O' : 'X';
      }
    },
    
    // 重置遊戲
    resetGame(state) {
      state.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
      state.score= {
        X: 0,
        O: 0
      },
      // 狀態重置
      state.player = 'X';
      state.winner = null;
      state.innings = 1;
      state.gameWon= null;
      state.isGameOver = false;
      state.gameStarted= false;
    },
    // 下一局
    nextRound(state) {
      if (state.gameWon) return;
      state.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
      state.winner = null;
      state.isGameOver = false;
      state.innings += 1;
    },
  },
  actions: {
  },
  modules: {
  }
})
