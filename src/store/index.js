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

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
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
  },
  getters: {
  },
  
  mutations: {
    // 定義 mutation 來更新 board 和 player
    makeMove(state, { x, y }) {
      if (state.winner) return;
      if (state.board[x][y] !== '') return;
      
      // 更新 board
      state.board[x][y] = state.player;
      
      // 切換玩家
      state.player = state.player === 'X' ? 'O' : 'X';
      
      // 檢查是否有勝利者
      state.winner = calculateWinner(state.board.flat());
      console.log(state.winner)
    },
    
    // 定義 mutation 來重置遊戲
    resetGame(state) {
      state.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
      state.player = 'X';
      state.winner = null;
    }
  },
  actions: {
  },
  modules: {
  }
})
