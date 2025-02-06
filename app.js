// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Amigo Secreto</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #f9f9f9;
    }
    .container {
      text-align: center;
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      width: 300px;
    }
    input[type="text"] {
      width: 80%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    button {
      padding: 10px 20px;
      margin: 10px;
      border: none;
      border-radius: 5px;
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 5px;
      background-color: #f1f1f1;
      margin: 5px 0;
      border-radius: 5px;
    }
    #result {
      font-size: 1.2em;
      color: green;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Amigo Secreto</h1>
    <input id="nameInput" type="text" placeholder="Ingrese nombre del amigo">
    <button onclick="addName()">Adicionar</button>
    <ul id="nameList"></ul>
    <button onclick="drawSecretFriend()">Sortear Amigo</button>
    <p id="result"></p>
  </div>

  <script>
    const names = [];

    // Función para agregar nombre a la lista
    function addName() {
      const input = document.getElementById('nameInput');
      const name = input.value.trim();

      if (name === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
      }

      names.push(name);
      updateNameList();
      input.value = ''; // Limpiar el campo de entrada
      input.focus();
    }

    // Actualiza la lista de nombres en la página
    function updateNameList() {
      const nameList = document.getElementById('nameList');
      nameList.innerHTML = '';
      names.forEach((name) => {
        const li = document.createElement('li');
        li.textContent = name;
        nameList.appendChild(li);
      });
    }

    // Función para sortear un nombre aleatorio
    function drawSecretFriend() {
      if (names.length === 0) {
        alert('La lista de amigos está vacía. Por favor, agregue nombres.');
        return;
      }

      const randomIndex = Math.floor(Math.random() * names.length);
      const selectedName = names[randomIndex];
      document.getElementById('result').textContent = `El amigo secreto es: ${selectedName}`;
    }
  </script>
</body>
</html>


