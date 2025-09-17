body {
    background-color: #111;
    color: white;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .card {
    background: #222;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    width: 380px;
  }
  
  .mood-buttons button {
    background: #6a0dad;
    border: none;
    padding: 10px 15px;
    margin: 5px;
    border-radius: 8px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .mood-buttons button:hover {
    background: #8a2be2;
  }
  
  .history {
    margin-top: 20px;
    text-align: left;
    max-height: 150px;
    overflow-y: auto;
    background: #333;
    padding: 10px;
    border-radius: 8px;
    font-size: 14px;
  }
  
  .entry {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    padding: 5px;
    background: #444;
    border-radius: 6px;
  }