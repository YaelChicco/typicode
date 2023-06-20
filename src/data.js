var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "DaphnaAura19",
database: "fullStackDb" // Replace "your_database_name" with the actual name of your database

});


// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE fullStackDb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

const createUsersTableQuery = `
CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  street VARCHAR(255) NOT NULL,
  suite VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  zipcode VARCHAR(255) NOT NULL,
  lat FLOAT NOT NULL,
  lng FLOAT NOT NULL,
  phone VARCHAR(255) NOT NULL,
  website VARCHAR(255) NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  catch_phrase VARCHAR(255) NOT NULL,
  bs VARCHAR(255) NOT NULL
);
`;
const usersData=[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    }
  ];

const insertUserQuery = 'INSERT INTO users VALUES ?';

const userDataValues = usersData.map((user) => [
  user.id,
  user.name,
  user.username,
  user.email,
  user.address.street,
  user.address.suite,
  user.address.city,
  user.address.zipcode,
  parseFloat(user.address.geo.lat),
  parseFloat(user.address.geo.lng),
  user.phone,
  user.website,
  user.company.name,
  user.company.catchPhrase,
  user.company.bs,
]);
const createTodosTableQuery= 
`
CREATE TABLE IF NOT EXISTS todos (
  userId INT,
  id INT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN
);
`;
const todosData=[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  },
  {
    "userId": 1,
    "id": 13,
    "title": "et doloremque nulla",
    "completed": false
  },
  {
    "userId": 1,
    "id": 14,
    "title": "repellendus sunt dolores architecto voluptatum",
    "completed": true
  },
  {
    "userId": 1,
    "id": 15,
    "title": "ab voluptatum amet voluptas",
    "completed": true
  },
  {
    "userId": 1,
    "id": 16,
    "title": "accusamus eos facilis sint et aut voluptatem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 17,
    "title": "quo laboriosam deleniti aut qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 18,
    "title": "dolorum est consequatur ea mollitia in culpa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 19,
    "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    "completed": true
  },
  {
    "userId": 1,
    "id": 20,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  },
  {
    "userId": 2,
    "id": 21,
    "title": "suscipit repellat esse quibusdam voluptatem incidunt",
    "completed": false
  },
  {
    "userId": 2,
    "id": 22,
    "title": "distinctio vitae autem nihil ut molestias quo",
    "completed": true
  },
  {
    "userId": 2,
    "id": 23,
    "title": "et itaque necessitatibus maxime molestiae qui quas velit",
    "completed": false
  },
  {
    "userId": 2,
    "id": 24,
    "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
    "completed": false
  },
  {
    "userId": 2,
    "id": 25,
    "title": "voluptas quo tenetur perspiciatis explicabo natus",
    "completed": true
  },
  {
    "userId": 2,
    "id": 26,
    "title": "aliquam aut quasi",
    "completed": true
  },
  {
    "userId": 2,
    "id": 27,
    "title": "veritatis pariatur delectus",
    "completed": true
  },
  {
    "userId": 2,
    "id": 28,
    "title": "nesciunt totam sit blanditiis sit",
    "completed": false
  },
  {
    "userId": 2,
    "id": 29,
    "title": "laborum aut in quam",
    "completed": false
  },
  {
    "userId": 2,
    "id": 30,
    "title": "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
    "completed": true
  },
  {
    "userId": 2,
    "id": 31,
    "title": "repudiandae totam in est sint facere fuga",
    "completed": false
  },
  {
    "userId": 2,
    "id": 32,
    "title": "earum doloribus ea doloremque quis",
    "completed": false
  },
  {
    "userId": 2,
    "id": 33,
    "title": "sint sit aut vero",
    "completed": false
  },
  {
    "userId": 2,
    "id": 34,
    "title": "porro aut necessitatibus eaque distinctio",
    "completed": false
  },
  {
    "userId": 2,
    "id": 35,
    "title": "repellendus veritatis molestias dicta incidunt",
    "completed": true
  },
  {
    "userId": 2,
    "id": 36,
    "title": "excepturi deleniti adipisci voluptatem et neque optio illum ad",
    "completed": true
  },
  {
    "userId": 2,
    "id": 37,
    "title": "sunt cum tempora",
    "completed": false
  },
  {
    "userId": 2,
    "id": 38,
    "title": "totam quia non",
    "completed": false
  },
  {
    "userId": 2,
    "id": 39,
    "title": "doloremque quibusdam asperiores libero corrupti illum qui omnis",
    "completed": false
  },
  {
    "userId": 2,
    "id": 40,
    "title": "totam atque quo nesciunt",
    "completed": true
  },
  {
    "userId": 3,
    "id": 41,
    "title": "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
    "completed": false
  },
  {
    "userId": 3,
    "id": 42,
    "title": "rerum perferendis error quia ut eveniet",
    "completed": false
  },
  {
    "userId": 3,
    "id": 43,
    "title": "tempore ut sint quis recusandae",
    "completed": true
  },
  {
    "userId": 3,
    "id": 44,
    "title": "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
    "completed": true
  },
  {
    "userId": 3,
    "id": 45,
    "title": "velit soluta adipisci molestias reiciendis harum",
    "completed": false
  },
  {
    "userId": 3,
    "id": 46,
    "title": "vel voluptatem repellat nihil placeat corporis",
    "completed": false
  },
  {
    "userId": 3,
    "id": 47,
    "title": "nam qui rerum fugiat accusamus",
    "completed": false
  },
  {
    "userId": 3,
    "id": 48,
    "title": "sit reprehenderit omnis quia",
    "completed": false
  },
  {
    "userId": 3,
    "id": 49,
    "title": "ut necessitatibus aut maiores debitis officia blanditiis velit et",
    "completed": false
  },
  {
    "userId": 3,
    "id": 50,
    "title": "cupiditate necessitatibus ullam aut quis dolor voluptate",
    "completed": true
  },
  {
    "userId": 3,
    "id": 51,
    "title": "distinctio exercitationem ab doloribus",
    "completed": false
  },
  {
    "userId": 3,
    "id": 52,
    "title": "nesciunt dolorum quis recusandae ad pariatur ratione",
    "completed": false
  },
  {
    "userId": 3,
    "id": 53,
    "title": "qui labore est occaecati recusandae aliquid quam",
    "completed": false
  },
  {
    "userId": 3,
    "id": 54,
    "title": "quis et est ut voluptate quam dolor",
    "completed": true
  },
  {
    "userId": 3,
    "id": 55,
    "title": "voluptatum omnis minima qui occaecati provident nulla voluptatem ratione",
    "completed": true
  },
  {
    "userId": 3,
    "id": 56,
    "title": "deleniti ea temporibus enim",
    "completed": true
  },
  {
    "userId": 3,
    "id": 57,
    "title": "pariatur et magnam ea doloribus similique voluptatem rerum quia",
    "completed": false
  },
  {
    "userId": 3,
    "id": 58,
    "title": "est dicta totam qui explicabo doloribus qui dignissimos",
    "completed": false
  },
  {
    "userId": 3,
    "id": 59,
    "title": "perspiciatis velit id laborum placeat iusto et aliquam odio",
    "completed": false
  },
  {
    "userId": 3,
    "id": 60,
    "title": "et sequi qui architecto ut adipisci",
    "completed": true
  },
  {
    "userId": 4,
    "id": 61,
    "title": "odit optio omnis qui sunt",
    "completed": true
  },
  {
    "userId": 4,
    "id": 62,
    "title": "et placeat et tempore aspernatur sint numquam",
    "completed": false
  },
  {
    "userId": 4,
    "id": 63,
    "title": "doloremque aut dolores quidem fuga qui nulla",
    "completed": true
  },
  {
    "userId": 4,
    "id": 64,
    "title": "voluptas consequatur qui ut quia magnam nemo esse",
    "completed": false
  },
  {
    "userId": 4,
    "id": 65,
    "title": "fugiat pariatur ratione ut asperiores necessitatibus magni",
    "completed": false
  },
  {
    "userId": 4,
    "id": 66,
    "title": "rerum eum molestias autem voluptatum sit optio",
    "completed": false
  },
  {
    "userId": 4,
    "id": 67,
    "title": "quia voluptatibus voluptatem quos similique maiores repellat",
    "completed": false
  },
  {
    "userId": 4,
    "id": 68,
    "title": "aut id perspiciatis voluptatem iusto",
    "completed": false
  },
  {
    "userId": 4,
    "id": 69,
    "title": "doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
    "completed": false
  },
  {
    "userId": 4,
    "id": 70,
    "title": "ut sequi accusantium et mollitia delectus sunt",
    "completed": false
  },
  {
    "userId": 4,
    "id": 71,
    "title": "aut velit saepe ullam",
    "completed": false
  },
  {
    "userId": 4,
    "id": 72,
    "title": "praesentium facilis facere quis harum voluptatibus voluptatem eum",
    "completed": false
  },
  {
    "userId": 4,
    "id": 73,
    "title": "sint amet quia totam corporis qui exercitationem commodi",
    "completed": true
  },
  {
    "userId": 4,
    "id": 74,
    "title": "expedita tempore nobis eveniet laborum maiores",
    "completed": false
  },
  {
    "userId": 4,
    "id": 75,
    "title": "occaecati adipisci est possimus totam",
    "completed": false
  },
  {
    "userId": 4,
    "id": 76,
    "title": "sequi dolorem sed",
    "completed": true
  },
  {
    "userId": 4,
    "id": 77,
    "title": "maiores aut nesciunt delectus exercitationem vel assumenda eligendi at",
    "completed": false
  },
  {
    "userId": 4,
    "id": 78,
    "title": "reiciendis est magnam amet nemo iste recusandae impedit quaerat",
    "completed": false
  },
  {
    "userId": 4,
    "id": 79,
    "title": "eum ipsa maxime ut",
    "completed": true
  },
  {
    "userId": 4,
    "id": 80,
    "title": "tempore molestias dolores rerum sequi voluptates ipsum consequatur",
    "completed": true
  },
  {
    "userId": 5,
    "id": 81,
    "title": "suscipit qui totam",
    "completed": true
  },
  {
    "userId": 5,
    "id": 82,
    "title": "voluptates eum voluptas et dicta",
    "completed": false
  },
  {
    "userId": 5,
    "id": 83,
    "title": "quidem at rerum quis ex aut sit quam",
    "completed": true
  },
  {
    "userId": 5,
    "id": 84,
    "title": "sunt veritatis ut voluptate",
    "completed": false
  },
  {
    "userId": 5,
    "id": 85,
    "title": "et quia ad iste a",
    "completed": true
  },
  {
    "userId": 5,
    "id": 86,
    "title": "incidunt ut saepe autem",
    "completed": true
  },
  {
    "userId": 5,
    "id": 87,
    "title": "laudantium quae eligendi consequatur quia et vero autem",
    "completed": true
  },
  {
    "userId": 5,
    "id": 88,
    "title": "vitae aut excepturi laboriosam sint aliquam et et accusantium",
    "completed": false
  },
  {
    "userId": 5,
    "id": 89,
    "title": "sequi ut omnis et",
    "completed": true
  },
  {
    "userId": 5,
    "id": 90,
    "title": "molestiae nisi accusantium tenetur dolorem et",
    "completed": true
  },
  {
    "userId": 5,
    "id": 91,
    "title": "nulla quis consequatur saepe qui id expedita",
    "completed": true
  },
  {
    "userId": 5,
    "id": 92,
    "title": "in omnis laboriosam",
    "completed": true
  },
  {
    "userId": 5,
    "id": 93,
    "title": "odio iure consequatur molestiae quibusdam necessitatibus quia sint",
    "completed": true
  },
  {
    "userId": 5,
    "id": 94,
    "title": "facilis modi saepe mollitia",
    "completed": false
  },
  {
    "userId": 5,
    "id": 95,
    "title": "vel nihil et molestiae iusto assumenda nemo quo ut",
    "completed": true
  },
  {
    "userId": 5,
    "id": 96,
    "title": "nobis suscipit ducimus enim asperiores voluptas",
    "completed": false
  },
  {
    "userId": 5,
    "id": 97,
    "title": "dolorum laboriosam eos qui iure aliquam",
    "completed": false
  },
  {
    "userId": 5,
    "id": 98,
    "title": "debitis accusantium ut quo facilis nihil quis sapiente necessitatibus",
    "completed": true
  },
  {
    "userId": 5,
    "id": 99,
    "title": "neque voluptates ratione",
    "completed": false
  },
  {
    "userId": 5,
    "id": 100,
    "title": "excepturi a et neque qui expedita vel voluptate",
    "completed": false
  }
];
const insertTodoQuery = 'INSERT INTO todos VALUES ?';

const todoDataValues = todosData.map((todo) => [
  todo.userId,
  todo.id,
  todo.title,
  todo.completed]
  );

  const createPostsTableQuery= 
  `
  CREATE TABLE IF NOT EXISTS posts (
    userId INT,
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL
  ); 
   `;
//AUTO_INCREMENT in the id INT PRIMARY KEY
  const postsData=[
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      "userId": 1,
      "id": 6,
      "title": "dolorem eum magni eos aperiam quia",
      "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
      "userId": 1,
      "id": 7,
      "title": "magnam facilis autem",
      "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
      "userId": 1,
      "id": 8,
      "title": "dolorem dolore est ipsam",
      "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
      "userId": 1,
      "id": 9,
      "title": "nesciunt iure omnis dolorem tempora et accusantium",
      "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
      "userId": 1,
      "id": 10,
      "title": "optio molestias id quia eum",
      "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
      "userId": 2,
      "id": 11,
      "title": "et ea vero quia laudantium autem",
      "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
      "userId": 2,
      "id": 12,
      "title": "in quibusdam tempore odit est dolorem",
      "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    },
    {
      "userId": 2,
      "id": 13,
      "title": "dolorum ut in voluptas mollitia et saepe quo animi",
      "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    },
    {
      "userId": 2,
      "id": 14,
      "title": "voluptatem eligendi optio",
      "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
    },
    {
      "userId": 2,
      "id": 15,
      "title": "eveniet quod temporibus",
      "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
    },
    {
      "userId": 2,
      "id": 16,
      "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
      "body": "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
    },
    {
      "userId": 2,
      "id": 17,
      "title": "fugit voluptas sed molestias voluptatem provident",
      "body": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
    },
    {
      "userId": 2,
      "id": 18,
      "title": "voluptate et itaque vero tempora molestiae",
      "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
    },
    {
      "userId": 2,
      "id": 19,
      "title": "adipisci placeat illum aut reiciendis qui",
      "body": "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
    },
    {
      "userId": 2,
      "id": 20,
      "title": "doloribus ad provident suscipit at",
      "body": "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
    },
    {
      "userId": 3,
      "id": 21,
      "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
      "body": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
    },
    {
      "userId": 3,
      "id": 22,
      "title": "dolor sint quo a velit explicabo quia nam",
      "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
    },
    {
      "userId": 3,
      "id": 23,
      "title": "maxime id vitae nihil numquam",
      "body": "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
    },
    {
      "userId": 3,
      "id": 24,
      "title": "autem hic labore sunt dolores incidunt",
      "body": "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
    },
    {
      "userId": 3,
      "id": 25,
      "title": "rem alias distinctio quo quis",
      "body": "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
    },
    {
      "userId": 3,
      "id": 26,
      "title": "est et quae odit qui non",
      "body": "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero"
    },
    {
      "userId": 3,
      "id": 27,
      "title": "quasi id et eos tenetur aut quo autem",
      "body": "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur"
    },
    {
      "userId": 3,
      "id": 28,
      "title": "delectus ullam et corporis nulla voluptas sequi",
      "body": "non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum"
    },
    {
      "userId": 3,
      "id": 29,
      "title": "iusto eius quod necessitatibus culpa ea",
      "body": "odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores"
    },
    {
      "userId": 3,
      "id": 30,
      "title": "a quo magni similique perferendis",
      "body": "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"
    },
    {
      "userId": 4,
      "id": 31,
      "title": "ullam ut quidem id aut vel consequuntur",
      "body": "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
    },
    {
      "userId": 4,
      "id": 32,
      "title": "doloremque illum aliquid sunt",
      "body": "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
    },
    {
      "userId": 4,
      "id": 33,
      "title": "qui explicabo molestiae dolorem",
      "body": "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod"
    },
    {
      "userId": 4,
      "id": 34,
      "title": "magnam ut rerum iure",
      "body": "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis"
    },
    {
      "userId": 4,
      "id": 35,
      "title": "id nihil consequatur molestias animi provident",
      "body": "nisi error delectus possimus ut eligendi vitae\nplaceat eos harum cupiditate facilis reprehenderit voluptatem beatae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit"
    },
    {
      "userId": 4,
      "id": 36,
      "title": "fuga nam accusamus voluptas reiciendis itaque",
      "body": "ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore"
    },
    {
      "userId": 4,
      "id": 37,
      "title": "provident vel ut sit ratione est",
      "body": "debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui"
    },
    {
      "userId": 4,
      "id": 38,
      "title": "explicabo et eos deleniti nostrum ab id repellendus",
      "body": "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure"
    },
    {
      "userId": 4,
      "id": 39,
      "title": "eos dolorem iste accusantium est eaque quam",
      "body": "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex"
    },
    {
      "userId": 4,
      "id": 40,
      "title": "enim quo cumque",
      "body": "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam"
    },
    {
      "userId": 5,
      "id": 41,
      "title": "non est facere",
      "body": "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe"
    },
    {
      "userId": 5,
      "id": 42,
      "title": "commodi ullam sint et excepturi error explicabo praesentium voluptas",
      "body": "odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut"
    },
    {
      "userId": 5,
      "id": 43,
      "title": "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
      "body": "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis"
    },
    {
      "userId": 5,
      "id": 44,
      "title": "optio dolor molestias sit",
      "body": "temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae"
    },
    {
      "userId": 5,
      "id": 45,
      "title": "ut numquam possimus omnis eius suscipit laudantium iure",
      "body": "est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem"
    },
    {
      "userId": 5,
      "id": 46,
      "title": "aut quo modi neque nostrum ducimus",
      "body": "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"
    },
    {
      "userId": 5,
      "id": 47,
      "title": "quibusdam cumque rem aut deserunt",
      "body": "voluptatem assumenda ut qui ut cupiditate aut impedit veniam\noccaecati nemo illum voluptatem laudantium\nmolestiae beatae rerum ea iure soluta nostrum\neligendi et voluptate"
    },
    {
      "userId": 5,
      "id": 48,
      "title": "ut voluptatem illum ea doloribus itaque eos",
      "body": "voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit"
    },
    {
      "userId": 5,
      "id": 49,
      "title": "laborum non sunt aut ut assumenda perspiciatis voluptas",
      "body": "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut"
    },
    {
      "userId": 5,
      "id": 50,
      "title": "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
      "body": "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"
    }  
  ];

const postDataValues = postsData.map((post) => [
  post.userId,
  post.id,
  post.title,
  post.body]
 );
 const insertPostQuery = 'INSERT INTO posts VALUES ?';


 const createCommentsTableQuery= 
 `
 CREATE TABLE IF NOT EXISTS comments (
  postId INT,
  id INT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  body TEXT NOT NULL
  ); 
  `;

const commentsData=[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
    "postId": 1,
    "id": 4,
    "name": "alias odio sit",
    "email": "Lew@alysha.tv",
    "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
  },
  {
    "postId": 1,
    "id": 5,
    "name": "vero eaque aliquid doloribus et culpa",
    "email": "Hayden@althea.biz",
    "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
  },
  {
    "postId": 2,
    "id": 6,
    "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
    "email": "Presley.Mueller@myrl.com",
    "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
  },
  {
    "postId": 2,
    "id": 7,
    "name": "repellat consequatur praesentium vel minus molestias voluptatum",
    "email": "Dallas@ole.me",
    "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
  },
  {
    "postId": 2,
    "id": 8,
    "name": "et omnis dolorem",
    "email": "Mallory_Kunze@marie.org",
    "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
  },
  {
    "postId": 2,
    "id": 9,
    "name": "provident id voluptas",
    "email": "Meghan_Littel@rene.us",
    "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
  },
  {
    "postId": 2,
    "id": 10,
    "name": "eaque et deleniti atque tenetur ut quo ut",
    "email": "Carmen_Keeling@caroline.name",
    "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
  },
  {
    "postId": 3,
    "id": 11,
    "name": "fugit labore quia mollitia quas deserunt nostrum sunt",
    "email": "Veronica_Goodwin@timmothy.net",
    "body": "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea"
  },
  {
    "postId": 3,
    "id": 12,
    "name": "modi ut eos dolores illum nam dolor",
    "email": "Oswald.Vandervort@leanne.org",
    "body": "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit"
  },
  {
    "postId": 3,
    "id": 13,
    "name": "aut inventore non pariatur sit vitae voluptatem sapiente",
    "email": "Kariane@jadyn.tv",
    "body": "fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et"
  },
  {
    "postId": 3,
    "id": 14,
    "name": "et officiis id praesentium hic aut ipsa dolorem repudiandae",
    "email": "Nathan@solon.io",
    "body": "vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum"
  },
  {
    "postId": 3,
    "id": 15,
    "name": "debitis magnam hic odit aut ullam nostrum tenetur",
    "email": "Maynard.Hodkiewicz@roberta.com",
    "body": "nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia"
  },
  {
    "postId": 4,
    "id": 16,
    "name": "perferendis temporibus delectus optio ea eum ratione dolorum",
    "email": "Christine@ayana.info",
    "body": "iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis"
  },
  {
    "postId": 4,
    "id": 17,
    "name": "eos est animi quis",
    "email": "Preston_Hudson@blaise.tv",
    "body": "consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore"
  },
  {
    "postId": 4,
    "id": 18,
    "name": "aut et tenetur ducimus illum aut nulla ab",
    "email": "Vincenza_Klocko@albertha.name",
    "body": "veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\nullam velit sit magnam laborum\nmagni ut molestias"
  },
  {
    "postId": 4,
    "id": 19,
    "name": "sed impedit rerum quia et et inventore unde officiis",
    "email": "Madelynn.Gorczany@darion.biz",
    "body": "doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut"
  },
  {
    "postId": 4,
    "id": 20,
    "name": "molestias expedita iste aliquid voluptates",
    "email": "Mariana_Orn@preston.org",
    "body": "qui harum consequatur fugiat\net eligendi perferendis at molestiae commodi ducimus\ndoloremque asperiores numquam qui\nut sit dignissimos reprehenderit tempore"
  },
  {
    "postId": 5,
    "id": 21,
    "name": "aliquid rerum mollitia qui a consectetur eum sed",
    "email": "Noemie@marques.me",
    "body": "deleniti aut sed molestias explicabo\ncommodi odio ratione nesciunt\nvoluptate doloremque est\nnam autem error delectus"
  },
  {
    "postId": 5,
    "id": 22,
    "name": "porro repellendus aut tempore quis hic",
    "email": "Khalil@emile.co.uk",
    "body": "qui ipsa animi nostrum praesentium voluptatibus odit\nqui non impedit cum qui nostrum aliquid fuga explicabo\nvoluptatem fugit earum voluptas exercitationem temporibus dignissimos distinctio\nesse inventore reprehenderit quidem ut incidunt nihil necessitatibus rerum"
  },
  {
    "postId": 5,
    "id": 23,
    "name": "quis tempora quidem nihil iste",
    "email": "Sophia@arianna.co.uk",
    "body": "voluptates provident repellendus iusto perspiciatis ex fugiat ut\nut dolor nam aliquid et expedita voluptate\nsunt vitae illo rerum in quos\nvel eligendi enim quae fugiat est"
  },
  {
    "postId": 5,
    "id": 24,
    "name": "in tempore eos beatae est",
    "email": "Jeffery@juwan.us",
    "body": "repudiandae repellat quia\nsequi est dolore explicabo nihil et\net sit et\net praesentium iste atque asperiores tenetur"
  },
  {
    "postId": 5,
    "id": 25,
    "name": "autem ab ea sit alias hic provident sit",
    "email": "Isaias_Kuhic@jarrett.net",
    "body": "sunt aut quae laboriosam sit ut impedit\nadipisci harum laborum totam deleniti voluptas odit rem ea\nnon iure distinctio ut velit doloribus\net non ex"
  }];

  

const commentDataValues = commentsData.map((comment) => [
  comment.postId,
  comment.id,
  comment.name,
  comment.email,
  comment.body]
   );
  const insertCommentQuery = 'INSERT INTO comments VALUES ?';

const createAlbumsTableQuery= 
  `CREATE TABLE IF NOT EXISTS albums (
    userId INT,
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL
  );
   `;
const albumsData= [
    {
      "userId": 1,
      "id": 1,
      "title": "quidem molestiae enim"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "sunt qui excepturi placeat culpa"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "omnis laborum odio"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "non esse culpa molestiae omnis sed optio"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "eaque aut omnis a"
    },
    {
      "userId": 1,
      "id": 6,
      "title": "natus impedit quibusdam illo est"
    },
    {
      "userId": 1,
      "id": 7,
      "title": "quibusdam autem aliquid et et quia"
    },
    {
      "userId": 1,
      "id": 8,
      "title": "qui fuga est a eum"
    },
    {
      "userId": 1,
      "id": 9,
      "title": "saepe unde necessitatibus rem"
    },
    {
      "userId": 1,
      "id": 10,
      "title": "distinctio laborum qui"
    },
    {
      "userId": 2,
      "id": 11,
      "title": "quam nostrum impedit mollitia quod et dolor"
    },
    {
      "userId": 2,
      "id": 12,
      "title": "consequatur autem doloribus natus consectetur"
    },
    {
      "userId": 2,
      "id": 13,
      "title": "ab rerum non rerum consequatur ut ea unde"
    },
    {
      "userId": 2,
      "id": 14,
      "title": "ducimus molestias eos animi atque nihil"
    },
    {
      "userId": 2,
      "id": 15,
      "title": "ut pariatur rerum ipsum natus repellendus praesentium"
    },
    {
      "userId": 2,
      "id": 16,
      "title": "voluptatem aut maxime inventore autem magnam atque repellat"
    },
    {
      "userId": 2,
      "id": 17,
      "title": "aut minima voluptatem ut velit"
    },
    {
      "userId": 2,
      "id": 18,
      "title": "nesciunt quia et doloremque"
    },
    {
      "userId": 2,
      "id": 19,
      "title": "velit pariatur quaerat similique libero omnis quia"
    },
    {
      "userId": 2,
      "id": 20,
      "title": "voluptas rerum iure ut enim"
    },
    {
      "userId": 3,
      "id": 21,
      "title": "repudiandae voluptatem optio est consequatur rem in temporibus et"
    },
    {
      "userId": 3,
      "id": 22,
      "title": "et rem non provident vel ut"
    },
    {
      "userId": 3,
      "id": 23,
      "title": "incidunt quisquam hic adipisci sequi"
    },
    {
      "userId": 3,
      "id": 24,
      "title": "dolores ut et facere placeat"
    },
    {
      "userId": 3,
      "id": 25,
      "title": "vero maxime id possimus sunt neque et consequatur"
    },
    {
      "userId": 3,
      "id": 26,
      "title": "quibusdam saepe ipsa vel harum"
    },
    {
      "userId": 3,
      "id": 27,
      "title": "id non nostrum expedita"
    },
    {
      "userId": 3,
      "id": 28,
      "title": "omnis neque exercitationem sed dolor atque maxime aut cum"
    },
    {
      "userId": 3,
      "id": 29,
      "title": "inventore ut quasi magnam itaque est fugit"
    },
    {
      "userId": 3,
      "id": 30,
      "title": "tempora assumenda et similique odit distinctio error"
    },
    {
      "userId": 4,
      "id": 31,
      "title": "adipisci laborum fuga laboriosam"
    },
    {
      "userId": 4,
      "id": 32,
      "title": "reiciendis dolores a ut qui debitis non quo labore"
    },
    {
      "userId": 4,
      "id": 33,
      "title": "iste eos nostrum"
    },
    {
      "userId": 4,
      "id": 34,
      "title": "cumque voluptatibus rerum architecto blanditiis"
    },
    {
      "userId": 4,
      "id": 35,
      "title": "et impedit nisi quae magni necessitatibus sed aut pariatur"
    },
    {
      "userId": 4,
      "id": 36,
      "title": "nihil cupiditate voluptate neque"
    },
    {
      "userId": 4,
      "id": 37,
      "title": "est placeat dicta ut nisi rerum iste"
    },
    {
      "userId": 4,
      "id": 38,
      "title": "unde a sequi id"
    },
    {
      "userId": 4,
      "id": 39,
      "title": "ratione porro illum labore eum aperiam sed"
    },
    {
      "userId": 4,
      "id": 40,
      "title": "voluptas neque et sint aut quo odit"
    },
    {
      "userId": 5,
      "id": 41,
      "title": "ea voluptates maiores eos accusantium officiis tempore mollitia consequatur"
    },
    {
      "userId": 5,
      "id": 42,
      "title": "tenetur explicabo ea"
    },
    {
      "userId": 5,
      "id": 43,
      "title": "aperiam doloremque nihil"
    },
    {
      "userId": 5,
      "id": 44,
      "title": "sapiente cum numquam officia consequatur vel natus quos suscipit"
    },
    {
      "userId": 5,
      "id": 45,
      "title": "tenetur quos ea unde est enim corrupti qui"
    },
    {
      "userId": 5,
      "id": 46,
      "title": "molestiae voluptate non"
    },
    {
      "userId": 5,
      "id": 47,
      "title": "temporibus molestiae aut"
    },
    {
      "userId": 5,
      "id": 48,
      "title": "modi consequatur culpa aut quam soluta alias perspiciatis laudantium"
    },
    {
      "userId": 5,
      "id": 49,
      "title": "ut aut vero repudiandae voluptas ullam voluptas at consequatur"
    },
    {
      "userId": 5,
      "id": 50,
      "title": "sed qui sed quas sit ducimus dolor"
    }];

const albumDataValues = albumsData.map((album) => [
  album.userId,
  album.id,
  album.title]
  );

const insertAlbumQuery = 'INSERT INTO albums VALUES ?';

const createPhotosTableQuery= 
  `CREATE TABLE IF NOT EXISTS photos (
    albumId INT,
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    thumbnailUrl VARCHAR(255) NOT NULL
  );
   `;

const photosData=[
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://via.placeholder.com/600/56a8c2",
    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  },
  {
    "albumId": 1,
    "id": 7,
    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
    "url": "https://via.placeholder.com/600/b0f7cc",
    "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
  },
  {
    "albumId": 1,
    "id": 8,
    "title": "aut porro officiis laborum odit ea laudantium corporis",
    "url": "https://via.placeholder.com/600/54176f",
    "thumbnailUrl": "https://via.placeholder.com/150/54176f"
  },
  {
    "albumId": 1,
    "id": 9,
    "title": "qui eius qui autem sed",
    "url": "https://via.placeholder.com/600/51aa97",
    "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
  },
  {
    "albumId": 1,
    "id": 10,
    "title": "beatae et provident et ut vel",
    "url": "https://via.placeholder.com/600/810b14",
    "thumbnailUrl": "https://via.placeholder.com/150/810b14"
  },
  {
    "albumId": 1,
    "id": 11,
    "title": "nihil at amet non hic quia qui",
    "url": "https://via.placeholder.com/600/1ee8a4",
    "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
  },
  {
    "albumId": 1,
    "id": 12,
    "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
    "url": "https://via.placeholder.com/600/66b7d2",
    "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
  },
  {
    "albumId": 1,
    "id": 13,
    "title": "repudiandae iusto deleniti rerum",
    "url": "https://via.placeholder.com/600/197d29",
    "thumbnailUrl": "https://via.placeholder.com/150/197d29"
  },
  {
    "albumId": 1,
    "id": 14,
    "title": "est necessitatibus architecto ut laborum",
    "url": "https://via.placeholder.com/600/61a65",
    "thumbnailUrl": "https://via.placeholder.com/150/61a65"
  },
  {
    "albumId": 1,
    "id": 15,
    "title": "harum dicta similique quis dolore earum ex qui",
    "url": "https://via.placeholder.com/600/f9cee5",
    "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
  },
  {
    "albumId": 1,
    "id": 16,
    "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
    "url": "https://via.placeholder.com/600/fdf73e",
    "thumbnailUrl": "https://via.placeholder.com/150/fdf73e"
  },
  {
    "albumId": 1,
    "id": 17,
    "title": "natus doloribus necessitatibus ipsa",
    "url": "https://via.placeholder.com/600/9c184f",
    "thumbnailUrl": "https://via.placeholder.com/150/9c184f"
  },
  {
    "albumId": 1,
    "id": 18,
    "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
    "url": "https://via.placeholder.com/600/1fe46f",
    "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
  },
  {
    "albumId": 1,
    "id": 19,
    "title": "perferendis nesciunt eveniet et optio a",
    "url": "https://via.placeholder.com/600/56acb2",
    "thumbnailUrl": "https://via.placeholder.com/150/56acb2"
  },
  {
    "albumId": 1,
    "id": 20,
    "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
    "url": "https://via.placeholder.com/600/8985dc",
    "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
  },
  {
    "albumId": 1,
    "id": 21,
    "title": "ad et natus qui",
    "url": "https://via.placeholder.com/600/5e12c6",
    "thumbnailUrl": "https://via.placeholder.com/150/5e12c6"
  },
  {
    "albumId": 1,
    "id": 22,
    "title": "et ea illo et sit voluptas animi blanditiis porro",
    "url": "https://via.placeholder.com/600/45601a",
    "thumbnailUrl": "https://via.placeholder.com/150/45601a"
  },
  {
    "albumId": 1,
    "id": 23,
    "title": "harum velit vero totam",
    "url": "https://via.placeholder.com/600/e924e6",
    "thumbnailUrl": "https://via.placeholder.com/150/e924e6"
  },
  {
    "albumId": 1,
    "id": 24,
    "title": "beatae officiis ut aut",
    "url": "https://via.placeholder.com/600/8f209a",
    "thumbnailUrl": "https://via.placeholder.com/150/8f209a"
  },
  {
    "albumId": 1,
    "id": 25,
    "title": "facere non quis fuga fugit vitae",
    "url": "https://via.placeholder.com/600/5e3a73",
    "thumbnailUrl": "https://via.placeholder.com/150/5e3a73"
  },
  {
    "albumId": 1,
    "id": 26,
    "title": "asperiores nobis voluptate qui",
    "url": "https://via.placeholder.com/600/474645",
    "thumbnailUrl": "https://via.placeholder.com/150/474645"
  },
  {
    "albumId": 1,
    "id": 27,
    "title": "sit asperiores est quos quis nisi veniam error",
    "url": "https://via.placeholder.com/600/c984bf",
    "thumbnailUrl": "https://via.placeholder.com/150/c984bf"
  },
  {
    "albumId": 1,
    "id": 28,
    "title": "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
    "url": "https://via.placeholder.com/600/392537",
    "thumbnailUrl": "https://via.placeholder.com/150/392537"
  },
  {
    "albumId": 1,
    "id": 29,
    "title": "aut ipsam quos ab placeat omnis",
    "url": "https://via.placeholder.com/600/602b9e",
    "thumbnailUrl": "https://via.placeholder.com/150/602b9e"
  },
  {
    "albumId": 1,
    "id": 30,
    "title": "odio enim voluptatem quidem aut nihil illum",
    "url": "https://via.placeholder.com/600/372c93",
    "thumbnailUrl": "https://via.placeholder.com/150/372c93"
  },
  {
    "albumId": 1,
    "id": 31,
    "title": "voluptate voluptates sequi",
    "url": "https://via.placeholder.com/600/a7c272",
    "thumbnailUrl": "https://via.placeholder.com/150/a7c272"
  },
  {
    "albumId": 1,
    "id": 32,
    "title": "ad enim dignissimos voluptatem similique",
    "url": "https://via.placeholder.com/600/c70a4d",
    "thumbnailUrl": "https://via.placeholder.com/150/c70a4d"
  },
  {
    "albumId": 1,
    "id": 33,
    "title": "culpa ipsam nobis qui fuga magni et mollitia",
    "url": "https://via.placeholder.com/600/501fe1",
    "thumbnailUrl": "https://via.placeholder.com/150/501fe1"
  },
  {
    "albumId": 1,
    "id": 34,
    "title": "vitae est facere quia itaque adipisci perferendis id maiores",
    "url": "https://via.placeholder.com/600/35185e",
    "thumbnailUrl": "https://via.placeholder.com/150/35185e"
  },
  {
    "albumId": 1,
    "id": 35,
    "title": "tenetur minus voluptatum et",
    "url": "https://via.placeholder.com/600/c96cad",
    "thumbnailUrl": "https://via.placeholder.com/150/c96cad"
  },
  {
    "albumId": 1,
    "id": 36,
    "title": "expedita rerum eaque",
    "url": "https://via.placeholder.com/600/4d564d",
    "thumbnailUrl": "https://via.placeholder.com/150/4d564d"
  },
  {
    "albumId": 1,
    "id": 37,
    "title": "totam voluptas iusto deserunt dolores",
    "url": "https://via.placeholder.com/600/ea51da",
    "thumbnailUrl": "https://via.placeholder.com/150/ea51da"
  },
  {
    "albumId": 1,
    "id": 38,
    "title": "natus magnam iure rerum pariatur molestias dolore nisi",
    "url": "https://via.placeholder.com/600/4f5b8d",
    "thumbnailUrl": "https://via.placeholder.com/150/4f5b8d"
  },
  {
    "albumId": 1,
    "id": 39,
    "title": "molestiae nam ullam et rerum doloribus",
    "url": "https://via.placeholder.com/600/1e71a2",
    "thumbnailUrl": "https://via.placeholder.com/150/1e71a2"
  },
  {
    "albumId": 1,
    "id": 40,
    "title": "est quas voluptates dignissimos sint praesentium nisi recusandae",
    "url": "https://via.placeholder.com/600/3a0b95",
    "thumbnailUrl": "https://via.placeholder.com/150/3a0b95"
  },
  {
    "albumId": 1,
    "id": 41,
    "title": "in voluptatem doloremque cum atque architecto deleniti",
    "url": "https://via.placeholder.com/600/659403",
    "thumbnailUrl": "https://via.placeholder.com/150/659403"
  },
  {
    "albumId": 1,
    "id": 42,
    "title": "voluptatibus a autem molestias voluptas architecto culpa",
    "url": "https://via.placeholder.com/600/ca50ac",
    "thumbnailUrl": "https://via.placeholder.com/150/ca50ac"
  },
  {
    "albumId": 1,
    "id": 43,
    "title": "eius hic autem ad beatae voluptas",
    "url": "https://via.placeholder.com/600/6ad437",
    "thumbnailUrl": "https://via.placeholder.com/150/6ad437"
  },
  {
    "albumId": 1,
    "id": 44,
    "title": "neque eum provident et inventore sed ipsam dignissimos quo",
    "url": "https://via.placeholder.com/600/29fe9f",
    "thumbnailUrl": "https://via.placeholder.com/150/29fe9f"
  },
  {
    "albumId": 1,
    "id": 45,
    "title": "praesentium fugit quis aut voluptatum commodi dolore corrupti",
    "url": "https://via.placeholder.com/600/c4084a",
    "thumbnailUrl": "https://via.placeholder.com/150/c4084a"
  },
  {
    "albumId": 1,
    "id": 46,
    "title": "quidem maiores in quia fugit dolore explicabo occaecati",
    "url": "https://via.placeholder.com/600/e9b68",
    "thumbnailUrl": "https://via.placeholder.com/150/e9b68"
  },
  {
    "albumId": 1,
    "id": 47,
    "title": "et soluta est",
    "url": "https://via.placeholder.com/600/b4412f",
    "thumbnailUrl": "https://via.placeholder.com/150/b4412f"
  },
  {
    "albumId": 1,
    "id": 48,
    "title": "ut esse id",
    "url": "https://via.placeholder.com/600/68e0a8",
    "thumbnailUrl": "https://via.placeholder.com/150/68e0a8"
  },
  {
    "albumId": 1,
    "id": 49,
    "title": "quasi quae est modi quis quam in impedit",
    "url": "https://via.placeholder.com/600/2cd88b",
    "thumbnailUrl": "https://via.placeholder.com/150/2cd88b"
  },
  {
    "albumId": 1,
    "id": 50,
    "title": "et inventore quae ut tempore eius voluptatum",
    "url": "https://via.placeholder.com/600/9e59da",
    "thumbnailUrl": "https://via.placeholder.com/150/9e59da"
  },
  {
    "albumId": 2,
    "id": 51,
    "title": "non sunt voluptatem placeat consequuntur rem incidunt",
    "url": "https://via.placeholder.com/600/8e973b",
    "thumbnailUrl": "https://via.placeholder.com/150/8e973b"
  },
  {
    "albumId": 2,
    "id": 52,
    "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
    "url": "https://via.placeholder.com/600/121fa4",
    "thumbnailUrl": "https://via.placeholder.com/150/121fa4"
  },
  {
    "albumId": 2,
    "id": 53,
    "title": "soluta et harum aliquid officiis ab omnis consequatur",
    "url": "https://via.placeholder.com/600/6efc5f",
    "thumbnailUrl": "https://via.placeholder.com/150/6efc5f"
  },
  {
    "albumId": 2,
    "id": 54,
    "title": "ut ex quibusdam dolore mollitia",
    "url": "https://via.placeholder.com/600/aa8f2e",
    "thumbnailUrl": "https://via.placeholder.com/150/aa8f2e"
  },
  {
    "albumId": 2,
    "id": 55,
    "title": "voluptatem consequatur totam qui aut iure est vel",
    "url": "https://via.placeholder.com/600/5e04a4",
    "thumbnailUrl": "https://via.placeholder.com/150/5e04a4"
  },
  {
    "albumId": 2,
    "id": 56,
    "title": "vel voluptatem esse consequuntur est officia quo aut quisquam",
    "url": "https://via.placeholder.com/600/f9f067",
    "thumbnailUrl": "https://via.placeholder.com/150/f9f067"
  },
  {
    "albumId": 2,
    "id": 57,
    "title": "vero est optio expedita quis ut molestiae",
    "url": "https://via.placeholder.com/600/95acce",
    "thumbnailUrl": "https://via.placeholder.com/150/95acce"
  },
  {
    "albumId": 2,
    "id": 58,
    "title": "rem pariatur facere eaque",
    "url": "https://via.placeholder.com/600/cde4c1",
    "thumbnailUrl": "https://via.placeholder.com/150/cde4c1"
  },
  {
    "albumId": 2,
    "id": 59,
    "title": "modi totam dolor eaque et ipsum est cupiditate",
    "url": "https://via.placeholder.com/600/a46a91",
    "thumbnailUrl": "https://via.placeholder.com/150/a46a91"
  },
  {
    "albumId": 2,
    "id": 60,
    "title": "ea enim temporibus asperiores placeat consectetur commodi ullam",
    "url": "https://via.placeholder.com/600/323599",
    "thumbnailUrl": "https://via.placeholder.com/150/323599"
  },
  {
    "albumId": 2,
    "id": 61,
    "title": "quia minus sed eveniet accusantium incidunt beatae odio",
    "url": "https://via.placeholder.com/600/e403d1",
    "thumbnailUrl": "https://via.placeholder.com/150/e403d1"
  },
  {
    "albumId": 2,
    "id": 62,
    "title": "dolorem cumque quo nihil inventore enim",
    "url": "https://via.placeholder.com/600/65ad4f",
    "thumbnailUrl": "https://via.placeholder.com/150/65ad4f"
  },
  {
    "albumId": 2,
    "id": 63,
    "title": "facere animi autem quod dolor",
    "url": "https://via.placeholder.com/600/4e557c",
    "thumbnailUrl": "https://via.placeholder.com/150/4e557c"
  },
  {
    "albumId": 2,
    "id": 64,
    "title": "doloremque culpa quia",
    "url": "https://via.placeholder.com/600/cd5a92",
    "thumbnailUrl": "https://via.placeholder.com/150/cd5a92"
  },
  {
    "albumId": 2,
    "id": 65,
    "title": "sed voluptatum enim eaque cumque qui sunt",
    "url": "https://via.placeholder.com/600/149540",
    "thumbnailUrl": "https://via.placeholder.com/150/149540"
  },
  {
    "albumId": 2,
    "id": 66,
    "title": "provident rerum voluptatem illo asperiores qui maiores",
    "url": "https://via.placeholder.com/600/ee0a7e",
    "thumbnailUrl": "https://via.placeholder.com/150/ee0a7e"
  },
  {
    "albumId": 2,
    "id": 67,
    "title": "veritatis labore ipsum unde aut quam dolores",
    "url": "https://via.placeholder.com/600/1279e9",
    "thumbnailUrl": "https://via.placeholder.com/150/1279e9"
  },
  {
    "albumId": 2,
    "id": 68,
    "title": "architecto aut quod qui ullam vitae expedita delectus",
    "url": "https://via.placeholder.com/600/e9603b",
    "thumbnailUrl": "https://via.placeholder.com/150/e9603b"
  },
  {
    "albumId": 2,
    "id": 69,
    "title": "et autem dolores aut porro est qui",
    "url": "https://via.placeholder.com/600/46e3b1",
    "thumbnailUrl": "https://via.placeholder.com/150/46e3b1"
  },
  {
    "albumId": 2,
    "id": 70,
    "title": "quam quos dolor eum ea in",
    "url": "https://via.placeholder.com/600/7375af",
    "thumbnailUrl": "https://via.placeholder.com/150/7375af"
  },
  {
    "albumId": 2,
    "id": 71,
    "title": "illo qui vel laboriosam vel fugit deserunt",
    "url": "https://via.placeholder.com/600/363789",
    "thumbnailUrl": "https://via.placeholder.com/150/363789"
  },
  {
    "albumId": 2,
    "id": 72,
    "title": "iusto sint enim nesciunt facilis exercitationem",
    "url": "https://via.placeholder.com/600/45935c",
    "thumbnailUrl": "https://via.placeholder.com/150/45935c"
  },
  {
    "albumId": 2,
    "id": 73,
    "title": "rerum exercitationem libero dolor",
    "url": "https://via.placeholder.com/600/1224bd",
    "thumbnailUrl": "https://via.placeholder.com/150/1224bd"
  },
  {
    "albumId": 2,
    "id": 74,
    "title": "eligendi quas consequatur aut consequuntur",
    "url": "https://via.placeholder.com/600/65ac19",
    "thumbnailUrl": "https://via.placeholder.com/150/65ac19"
  },
  {
    "albumId": 2,
    "id": 75,
    "title": "aut magni quibusdam cupiditate ea",
    "url": "https://via.placeholder.com/600/a9ef52",
    "thumbnailUrl": "https://via.placeholder.com/150/a9ef52"
  },
  {
    "albumId": 2,
    "id": 76,
    "title": "magni nulla et dolores",
    "url": "https://via.placeholder.com/600/7644fe",
    "thumbnailUrl": "https://via.placeholder.com/150/7644fe"
  },
  {
    "albumId": 2,
    "id": 77,
    "title": "ipsum consequatur vel omnis mollitia repellat dolores quasi",
    "url": "https://via.placeholder.com/600/36d137",
    "thumbnailUrl": "https://via.placeholder.com/150/36d137"
  },
  {
    "albumId": 2,
    "id": 78,
    "title": "aperiam aut est amet tenetur et dolorem",
    "url": "https://via.placeholder.com/600/637984",
    "thumbnailUrl": "https://via.placeholder.com/150/637984"
  },
  {
    "albumId": 2,
    "id": 79,
    "title": "est vel et laboriosam quo aspernatur distinctio molestiae",
    "url": "https://via.placeholder.com/600/c611a9",
    "thumbnailUrl": "https://via.placeholder.com/150/c611a9"
  },
  {
    "albumId": 2,
    "id": 80,
    "title": "et corrupti nihil cumque",
    "url": "https://via.placeholder.com/600/a0c998",
    "thumbnailUrl": "https://via.placeholder.com/150/a0c998"
  },
  {
    "albumId": 2,
    "id": 81,
    "title": "error magni fugiat dolorem impedit molestiae illo ullam debitis",
    "url": "https://via.placeholder.com/600/31a74c",
    "thumbnailUrl": "https://via.placeholder.com/150/31a74c"
  },
  {
    "albumId": 2,
    "id": 82,
    "title": "voluptate voluptas molestias vitae illo iusto",
    "url": "https://via.placeholder.com/600/88b703",
    "thumbnailUrl": "https://via.placeholder.com/150/88b703"
  },
  {
    "albumId": 2,
    "id": 83,
    "title": "quia quasi enim voluptatem repellat sit sint",
    "url": "https://via.placeholder.com/600/a19891",
    "thumbnailUrl": "https://via.placeholder.com/150/a19891"
  },
  {
    "albumId": 2,
    "id": 84,
    "title": "aliquam dolorem ut modi ratione et assumenda impedit",
    "url": "https://via.placeholder.com/600/b5205d",
    "thumbnailUrl": "https://via.placeholder.com/150/b5205d"
  },
  {
    "albumId": 2,
    "id": 85,
    "title": "ullam delectus architecto sint error",
    "url": "https://via.placeholder.com/600/eb7e7f",
    "thumbnailUrl": "https://via.placeholder.com/150/eb7e7f"
  },
  {
    "albumId": 2,
    "id": 86,
    "title": "qui vel ut odio consequuntur",
    "url": "https://via.placeholder.com/600/fd5751",
    "thumbnailUrl": "https://via.placeholder.com/150/fd5751"
  },
  {
    "albumId": 2,
    "id": 87,
    "title": "eos nihil sunt accusantium omnis",
    "url": "https://via.placeholder.com/600/224566",
    "thumbnailUrl": "https://via.placeholder.com/150/224566"
  },
  {
    "albumId": 2,
    "id": 88,
    "title": "inventore veritatis magnam enim quasi",
    "url": "https://via.placeholder.com/600/75334a",
    "thumbnailUrl": "https://via.placeholder.com/150/75334a"
  },
  {
    "albumId": 2,
    "id": 89,
    "title": "id at cum incidunt nulla dolor vero tenetur",
    "url": "https://via.placeholder.com/600/21d35",
    "thumbnailUrl": "https://via.placeholder.com/150/21d35"
  },
  {
    "albumId": 2,
    "id": 90,
    "title": "et quae eligendi vitae maxime in",
    "url": "https://via.placeholder.com/600/bfe0dc",
    "thumbnailUrl": "https://via.placeholder.com/150/bfe0dc"
  },
  {
    "albumId": 2,
    "id": 91,
    "title": "sunt quo laborum commodi porro consequatur nam delectus et",
    "url": "https://via.placeholder.com/600/40591",
    "thumbnailUrl": "https://via.placeholder.com/150/40591"
  },
  {
    "albumId": 2,
    "id": 92,
    "title": "quod non quae",
    "url": "https://via.placeholder.com/600/de79c7",
    "thumbnailUrl": "https://via.placeholder.com/150/de79c7"
  },
  {
    "albumId": 2,
    "id": 93,
    "title": "molestias et aliquam natus repellendus accusamus dolore",
    "url": "https://via.placeholder.com/600/2edde0",
    "thumbnailUrl": "https://via.placeholder.com/150/2edde0"
  },
  {
    "albumId": 2,
    "id": 94,
    "title": "et quisquam aspernatur",
    "url": "https://via.placeholder.com/600/cc12f5",
    "thumbnailUrl": "https://via.placeholder.com/150/cc12f5"
  },
  {
    "albumId": 2,
    "id": 95,
    "title": "magni odio non",
    "url": "https://via.placeholder.com/600/9cda61",
    "thumbnailUrl": "https://via.placeholder.com/150/9cda61"
  },
  {
    "albumId": 2,
    "id": 96,
    "title": "dolore esse a in eos sed",
    "url": "https://via.placeholder.com/600/1fb08b",
    "thumbnailUrl": "https://via.placeholder.com/150/1fb08b"
  },
  {
    "albumId": 2,
    "id": 97,
    "title": "labore magnam officiis nemo et",
    "url": "https://via.placeholder.com/600/e2223e",
    "thumbnailUrl": "https://via.placeholder.com/150/e2223e"
  },
  {
    "albumId": 2,
    "id": 98,
    "title": "sed commodi libero id nesciunt modi vitae",
    "url": "https://via.placeholder.com/600/a77d08",
    "thumbnailUrl": "https://via.placeholder.com/150/a77d08"
  },
  {
    "albumId": 2,
    "id": 99,
    "title": "magnam dolor sed enim vel optio consequuntur",
    "url": "https://via.placeholder.com/600/b04f2e",
    "thumbnailUrl": "https://via.placeholder.com/150/b04f2e"
  },
  {
    "albumId": 2,
    "id": 100,
    "title": "et qui rerum",
    "url": "https://via.placeholder.com/600/14ba42",
    "thumbnailUrl": "https://via.placeholder.com/150/14ba42"
  },
  {
    "albumId": 3,
    "id": 101,
    "title": "incidunt alias vel enim",
    "url": "https://via.placeholder.com/600/e743b",
    "thumbnailUrl": "https://via.placeholder.com/150/e743b"
  },
  {
    "albumId": 3,
    "id": 102,
    "title": "eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt",
    "url": "https://via.placeholder.com/600/a393af",
    "thumbnailUrl": "https://via.placeholder.com/150/a393af"
  },
  {
    "albumId": 3,
    "id": 103,
    "title": "et eius nisi in ut reprehenderit labore eum",
    "url": "https://via.placeholder.com/600/35cedf",
    "thumbnailUrl": "https://via.placeholder.com/150/35cedf"
  },
  {
    "albumId": 3,
    "id": 104,
    "title": "et natus vero quia totam aut et minima",
    "url": "https://via.placeholder.com/600/313b40",
    "thumbnailUrl": "https://via.placeholder.com/150/313b40"
  },
  {
    "albumId": 3,
    "id": 105,
    "title": "veritatis numquam eius",
    "url": "https://via.placeholder.com/600/eaf2e1",
    "thumbnailUrl": "https://via.placeholder.com/150/eaf2e1"
  },
  {
    "albumId": 3,
    "id": 106,
    "title": "repellat molestiae nihil iste autem blanditiis officiis",
    "url": "https://via.placeholder.com/600/b1f841",
    "thumbnailUrl": "https://via.placeholder.com/150/b1f841"
  },
  {
    "albumId": 3,
    "id": 107,
    "title": "maiores ipsa ut autem",
    "url": "https://via.placeholder.com/600/50d332",
    "thumbnailUrl": "https://via.placeholder.com/150/50d332"
  },
  {
    "albumId": 3,
    "id": 108,
    "title": "qui tempora vel exercitationem harum iusto voluptas incidunt",
    "url": "https://via.placeholder.com/600/627495",
    "thumbnailUrl": "https://via.placeholder.com/150/627495"
  },
  {
    "albumId": 3,
    "id": 109,
    "title": "quidem ut quos non qui debitis exercitationem",
    "url": "https://via.placeholder.com/600/c5e1ce",
    "thumbnailUrl": "https://via.placeholder.com/150/c5e1ce"
  },
  {
    "albumId": 3,
    "id": 110,
    "title": "reiciendis et velit laborum recusandae",
    "url": "https://via.placeholder.com/600/2f9e30",
    "thumbnailUrl": "https://via.placeholder.com/150/2f9e30"
  },
  {
    "albumId": 3,
    "id": 111,
    "title": "quos rem nulla ea amet",
    "url": "https://via.placeholder.com/600/cc178e",
    "thumbnailUrl": "https://via.placeholder.com/150/cc178e"
  },
  {
    "albumId": 3,
    "id": 112,
    "title": "laudantium quibusdam inventore",
    "url": "https://via.placeholder.com/600/170690",
    "thumbnailUrl": "https://via.placeholder.com/150/170690"
  },
  {
    "albumId": 3,
    "id": 113,
    "title": "hic nulla consectetur",
    "url": "https://via.placeholder.com/600/1dff02",
    "thumbnailUrl": "https://via.placeholder.com/150/1dff02"
  },
  {
    "albumId": 3,
    "id": 114,
    "title": "consequatur quaerat sunt et",
    "url": "https://via.placeholder.com/600/e79b4e",
    "thumbnailUrl": "https://via.placeholder.com/150/e79b4e"
  },
  {
    "albumId": 3,
    "id": 115,
    "title": "unde minus molestias",
    "url": "https://via.placeholder.com/600/da7ddf",
    "thumbnailUrl": "https://via.placeholder.com/150/da7ddf"
  },
  {
    "albumId": 3,
    "id": 116,
    "title": "et iure eius enim explicabo",
    "url": "https://via.placeholder.com/600/aac33b",
    "thumbnailUrl": "https://via.placeholder.com/150/aac33b"
  },
  {
    "albumId": 3,
    "id": 117,
    "title": "dolore quo nemo omnis odio et iure explicabo",
    "url": "https://via.placeholder.com/600/b2fe8",
    "thumbnailUrl": "https://via.placeholder.com/150/b2fe8"
  },
  {
    "albumId": 3,
    "id": 118,
    "title": "et doloremque excepturi libero earum",
    "url": "https://via.placeholder.com/600/eb76bc",
    "thumbnailUrl": "https://via.placeholder.com/150/eb76bc"
  },
  {
    "albumId": 3,
    "id": 119,
    "title": "quisquam error consequatur",
    "url": "https://via.placeholder.com/600/61918f",
    "thumbnailUrl": "https://via.placeholder.com/150/61918f"
  },
  {
    "albumId": 3,
    "id": 120,
    "title": "eos quia minima modi cumque illo odit consequatur vero",
    "url": "https://via.placeholder.com/600/3ee01c",
    "thumbnailUrl": "https://via.placeholder.com/150/3ee01c"
  },
  {
    "albumId": 3,
    "id": 121,
    "title": "commodi sed enim sint in nobis",
    "url": "https://via.placeholder.com/600/fd8ae7",
    "thumbnailUrl": "https://via.placeholder.com/150/fd8ae7"
  },
  {
    "albumId": 3,
    "id": 122,
    "title": "consequatur quos odio harum alias",
    "url": "https://via.placeholder.com/600/949d2f",
    "thumbnailUrl": "https://via.placeholder.com/150/949d2f"
  },
  {
    "albumId": 3,
    "id": 123,
    "title": "fuga sint ipsa quis",
    "url": "https://via.placeholder.com/600/ecef3e",
    "thumbnailUrl": "https://via.placeholder.com/150/ecef3e"
  },
  {
    "albumId": 3,
    "id": 124,
    "title": "officiis similique autem unde repellendus",
    "url": "https://via.placeholder.com/600/bc8f1d",
    "thumbnailUrl": "https://via.placeholder.com/150/bc8f1d"
  },
  {
    "albumId": 3,
    "id": 125,
    "title": "et fuga perspiciatis qui quis",
    "url": "https://via.placeholder.com/600/d0882c",
    "thumbnailUrl": "https://via.placeholder.com/150/d0882c"
  },
  {
    "albumId": 3,
    "id": 126,
    "title": "id reiciendis neque voluptas explicabo quae",
    "url": "https://via.placeholder.com/600/7ef62f",
    "thumbnailUrl": "https://via.placeholder.com/150/7ef62f"
  },
  {
    "albumId": 3,
    "id": 127,
    "title": "magnam quia sed aspernatur",
    "url": "https://via.placeholder.com/600/74456b",
    "thumbnailUrl": "https://via.placeholder.com/150/74456b"
  },
  {
    "albumId": 3,
    "id": 128,
    "title": "est facere ut nam repellat numquam quia quia eos",
    "url": "https://via.placeholder.com/600/b0931d",
    "thumbnailUrl": "https://via.placeholder.com/150/b0931d"
  },
  {
    "albumId": 3,
    "id": 129,
    "title": "alias mollitia voluptatum soluta quod",
    "url": "https://via.placeholder.com/600/5efeca",
    "thumbnailUrl": "https://via.placeholder.com/150/5efeca"
  },
  {
    "albumId": 3,
    "id": 130,
    "title": "maxime provident eaque sapiente ipsa ducimus",
    "url": "https://via.placeholder.com/600/89afb1",
    "thumbnailUrl": "https://via.placeholder.com/150/89afb1"
  },
  {
    "albumId": 3,
    "id": 131,
    "title": "qui sed ex",
    "url": "https://via.placeholder.com/600/af2618",
    "thumbnailUrl": "https://via.placeholder.com/150/af2618"
  },
  {
    "albumId": 3,
    "id": 132,
    "title": "repellendus velit id non veniam dolorum quod est",
    "url": "https://via.placeholder.com/600/f9a540",
    "thumbnailUrl": "https://via.placeholder.com/150/f9a540"
  },
  {
    "albumId": 3,
    "id": 133,
    "title": "placeat in reprehenderit",
    "url": "https://via.placeholder.com/600/f8ee8a",
    "thumbnailUrl": "https://via.placeholder.com/150/f8ee8a"
  },
  {
    "albumId": 3,
    "id": 134,
    "title": "eveniet perspiciatis optio est qui ea dolore",
    "url": "https://via.placeholder.com/600/496b8d",
    "thumbnailUrl": "https://via.placeholder.com/150/496b8d"
  },
  {
    "albumId": 3,
    "id": 135,
    "title": "qui harum quis ipsum optio ex",
    "url": "https://via.placeholder.com/600/26016b",
    "thumbnailUrl": "https://via.placeholder.com/150/26016b"
  },
  {
    "albumId": 3,
    "id": 136,
    "title": "aut voluptas aut temporibus",
    "url": "https://via.placeholder.com/600/2e1c14",
    "thumbnailUrl": "https://via.placeholder.com/150/2e1c14"
  },
  {
    "albumId": 3,
    "id": 137,
    "title": "et sit earum praesentium quas quis sint et",
    "url": "https://via.placeholder.com/600/41c3dc",
    "thumbnailUrl": "https://via.placeholder.com/150/41c3dc"
  },
  {
    "albumId": 3,
    "id": 138,
    "title": "vitae delectus sed",
    "url": "https://via.placeholder.com/600/ff79d0",
    "thumbnailUrl": "https://via.placeholder.com/150/ff79d0"
  },
  {
    "albumId": 3,
    "id": 139,
    "title": "velit placeat optio corrupti",
    "url": "https://via.placeholder.com/600/ff2fe8",
    "thumbnailUrl": "https://via.placeholder.com/150/ff2fe8"
  },
  {
    "albumId": 3,
    "id": 140,
    "title": "assumenda sit non debitis dolorem saepe quae deleniti",
    "url": "https://via.placeholder.com/600/c0798a",
    "thumbnailUrl": "https://via.placeholder.com/150/c0798a"
  },
  {
    "albumId": 3,
    "id": 141,
    "title": "commodi eum dolorum reiciendis unde ut",
    "url": "https://via.placeholder.com/600/b13ff6",
    "thumbnailUrl": "https://via.placeholder.com/150/b13ff6"
  },
  {
    "albumId": 3,
    "id": 142,
    "title": "reprehenderit totam dolor itaque",
    "url": "https://via.placeholder.com/600/c7a96d",
    "thumbnailUrl": "https://via.placeholder.com/150/c7a96d"
  },
  {
    "albumId": 3,
    "id": 143,
    "title": "totam temporibus eaque est eum et perspiciatis ullam",
    "url": "https://via.placeholder.com/600/79439b",
    "thumbnailUrl": "https://via.placeholder.com/150/79439b"
  },
  {
    "albumId": 3,
    "id": 144,
    "title": "aspernatur possimus consectetur in tempore distinctio a ipsa officiis",
    "url": "https://via.placeholder.com/600/66a752",
    "thumbnailUrl": "https://via.placeholder.com/150/66a752"
  },
  {
    "albumId": 3,
    "id": 145,
    "title": "eius unde ipsa incidunt corrupti quia accusamus omnis",
    "url": "https://via.placeholder.com/600/f3472e",
    "thumbnailUrl": "https://via.placeholder.com/150/f3472e"
  },
  {
    "albumId": 3,
    "id": 146,
    "title": "ullam dolor ut ipsa veniam",
    "url": "https://via.placeholder.com/600/6c746e",
    "thumbnailUrl": "https://via.placeholder.com/150/6c746e"
  },
  {
    "albumId": 3,
    "id": 147,
    "title": "minima aspernatur eius nemo ut",
    "url": "https://via.placeholder.com/600/661f4c",
    "thumbnailUrl": "https://via.placeholder.com/150/661f4c"
  },
  {
    "albumId": 3,
    "id": 148,
    "title": "aperiam amet est occaecati quae non ut",
    "url": "https://via.placeholder.com/600/b9d67e",
    "thumbnailUrl": "https://via.placeholder.com/150/b9d67e"
  },
  {
    "albumId": 3,
    "id": 149,
    "title": "saepe recusandae ut odio enim ipsa quo placeat iusto",
    "url": "https://via.placeholder.com/600/cffa9b",
    "thumbnailUrl": "https://via.placeholder.com/150/cffa9b"
  },
  {
    "albumId": 3,
    "id": 150,
    "title": "ipsum numquam ratione facilis provident animi reprehenderit ut",
    "url": "https://via.placeholder.com/600/3689cd",
    "thumbnailUrl": "https://via.placeholder.com/150/3689cd"
  },
  {
    "albumId": 4,
    "id": 151,
    "title": "possimus dolor minima provident ipsam",
    "url": "https://via.placeholder.com/600/1d2ad4",
    "thumbnailUrl": "https://via.placeholder.com/150/1d2ad4"
  },
  {
    "albumId": 4,
    "id": 152,
    "title": "et accusantium enim pariatur eum nihil fugit",
    "url": "https://via.placeholder.com/600/a01c5b",
    "thumbnailUrl": "https://via.placeholder.com/150/a01c5b"
  },
  {
    "albumId": 4,
    "id": 153,
    "title": "eum laborum in sunt ea",
    "url": "https://via.placeholder.com/600/9da52c",
    "thumbnailUrl": "https://via.placeholder.com/150/9da52c"
  },
  {
    "albumId": 4,
    "id": 154,
    "title": "dolorum ipsam odit",
    "url": "https://via.placeholder.com/600/7f330f",
    "thumbnailUrl": "https://via.placeholder.com/150/7f330f"
  },
  {
    "albumId": 4,
    "id": 155,
    "title": "occaecati sed earum ab ut vel quibusdam perferendis nihil",
    "url": "https://via.placeholder.com/600/877cd8",
    "thumbnailUrl": "https://via.placeholder.com/150/877cd8"
  },
  {
    "albumId": 4,
    "id": 156,
    "title": "sed quia accusantium nemo placeat dolor ut",
    "url": "https://via.placeholder.com/600/11af10",
    "thumbnailUrl": "https://via.placeholder.com/150/11af10"
  },
  {
    "albumId": 4,
    "id": 157,
    "title": "nisi odio nihil molestias facere laudantium distinctio facilis et",
    "url": "https://via.placeholder.com/600/211c94",
    "thumbnailUrl": "https://via.placeholder.com/150/211c94"
  },
  {
    "albumId": 4,
    "id": 158,
    "title": "qui autem adipisci veritatis iure necessitatibus et ab voluptatem",
    "url": "https://via.placeholder.com/600/5fa928",
    "thumbnailUrl": "https://via.placeholder.com/150/5fa928"
  },
  {
    "albumId": 4,
    "id": 159,
    "title": "est ad molestiae ut voluptatum omnis sit consequuntur et",
    "url": "https://via.placeholder.com/600/3587a",
    "thumbnailUrl": "https://via.placeholder.com/150/3587a"
  },
  {
    "albumId": 4,
    "id": 160,
    "title": "sequi maiores aut sunt",
    "url": "https://via.placeholder.com/600/170b0e",
    "thumbnailUrl": "https://via.placeholder.com/150/170b0e"
  },
  {
    "albumId": 4,
    "id": 161,
    "title": "aliquid aut at sed repudiandae est autem",
    "url": "https://via.placeholder.com/600/739fba",
    "thumbnailUrl": "https://via.placeholder.com/150/739fba"
  },
  {
    "albumId": 4,
    "id": 162,
    "title": "et iste aliquam laboriosam et",
    "url": "https://via.placeholder.com/600/2b0599",
    "thumbnailUrl": "https://via.placeholder.com/150/2b0599"
  },
  {
    "albumId": 4,
    "id": 163,
    "title": "est eos ducimus consequatur est",
    "url": "https://via.placeholder.com/600/aae0f3",
    "thumbnailUrl": "https://via.placeholder.com/150/aae0f3"
  },
  {
    "albumId": 4,
    "id": 164,
    "title": "aut quia enim id neque expedita aliquid",
    "url": "https://via.placeholder.com/600/939eae",
    "thumbnailUrl": "https://via.placeholder.com/150/939eae"
  },
  {
    "albumId": 4,
    "id": 165,
    "title": "voluptas dolorem rerum similique quis id unde",
    "url": "https://via.placeholder.com/600/1b5aec",
    "thumbnailUrl": "https://via.placeholder.com/150/1b5aec"
  },
  {
    "albumId": 4,
    "id": 166,
    "title": "harum accusamus asperiores",
    "url": "https://via.placeholder.com/600/74c0c4",
    "thumbnailUrl": "https://via.placeholder.com/150/74c0c4"
  },
  {
    "albumId": 4,
    "id": 167,
    "title": "et fugit et eius quod provident",
    "url": "https://via.placeholder.com/600/3b4a81",
    "thumbnailUrl": "https://via.placeholder.com/150/3b4a81"
  },
  {
    "albumId": 4,
    "id": 168,
    "title": "fugit ad atque excepturi",
    "url": "https://via.placeholder.com/600/e20f7b",
    "thumbnailUrl": "https://via.placeholder.com/150/e20f7b"
  },
  {
    "albumId": 4,
    "id": 169,
    "title": "enim asperiores libero ratione voluptatibus alias facilis in voluptatem",
    "url": "https://via.placeholder.com/600/e55524",
    "thumbnailUrl": "https://via.placeholder.com/150/e55524"
  },
  {
    "albumId": 4,
    "id": 170,
    "title": "placeat fugit voluptatum cupiditate nemo aut",
    "url": "https://via.placeholder.com/600/e959e4",
    "thumbnailUrl": "https://via.placeholder.com/150/e959e4"
  },
  {
    "albumId": 4,
    "id": 171,
    "title": "nemo tenetur ipsam",
    "url": "https://via.placeholder.com/600/3bb51b",
    "thumbnailUrl": "https://via.placeholder.com/150/3bb51b"
  },
  {
    "albumId": 4,
    "id": 172,
    "title": "deserunt commodi et aut et molestiae debitis et sed",
    "url": "https://via.placeholder.com/600/d611bd",
    "thumbnailUrl": "https://via.placeholder.com/150/d611bd"
  },
  {
    "albumId": 4,
    "id": 173,
    "title": "cupiditate tempore debitis quas quis recusandae facilis esse",
    "url": "https://via.placeholder.com/600/240f8e",
    "thumbnailUrl": "https://via.placeholder.com/150/240f8e"
  },
  {
    "albumId": 4,
    "id": 174,
    "title": "assumenda sed deleniti",
    "url": "https://via.placeholder.com/600/44ed94",
    "thumbnailUrl": "https://via.placeholder.com/150/44ed94"
  },
  {
    "albumId": 4,
    "id": 175,
    "title": "est ab sed repellendus labore sit modi aperiam",
    "url": "https://via.placeholder.com/600/a06f8a",
    "thumbnailUrl": "https://via.placeholder.com/150/a06f8a"
  },
  {
    "albumId": 4,
    "id": 176,
    "title": "aut omnis qui et est molestiae distinctio atque",
    "url": "https://via.placeholder.com/600/d6dc09",
    "thumbnailUrl": "https://via.placeholder.com/150/d6dc09"
  },
  {
    "albumId": 4,
    "id": 177,
    "title": "ratione autem magni eveniet voluptas quia corporis",
    "url": "https://via.placeholder.com/600/37942b",
    "thumbnailUrl": "https://via.placeholder.com/150/37942b"
  },
  {
    "albumId": 4,
    "id": 178,
    "title": "laboriosam nihil cum provident id quo",
    "url": "https://via.placeholder.com/600/b80430",
    "thumbnailUrl": "https://via.placeholder.com/150/b80430"
  },
  {
    "albumId": 4,
    "id": 179,
    "title": "pariatur nesciunt temporibus ipsam ut maiores labore",
    "url": "https://via.placeholder.com/600/a29d32",
    "thumbnailUrl": "https://via.placeholder.com/150/a29d32"
  },
  {
    "albumId": 4,
    "id": 180,
    "title": "temporibus aliquam vel et consequuntur minima voluptate sunt",
    "url": "https://via.placeholder.com/600/727ca8",
    "thumbnailUrl": "https://via.placeholder.com/150/727ca8"
  },
  {
    "albumId": 4,
    "id": 181,
    "title": "sed animi et sed",
    "url": "https://via.placeholder.com/600/808e8c",
    "thumbnailUrl": "https://via.placeholder.com/150/808e8c"
  },
  {
    "albumId": 4,
    "id": 182,
    "title": "non aut facilis nihil aliquid sequi quae aut soluta",
    "url": "https://via.placeholder.com/600/10e0b8",
    "thumbnailUrl": "https://via.placeholder.com/150/10e0b8"
  },
  {
    "albumId": 4,
    "id": 183,
    "title": "voluptas necessitatibus ut",
    "url": "https://via.placeholder.com/600/4dc2b9",
    "thumbnailUrl": "https://via.placeholder.com/150/4dc2b9"
  },
  {
    "albumId": 4,
    "id": 184,
    "title": "deleniti enim aliquid sequi",
    "url": "https://via.placeholder.com/600/f0d2f4",
    "thumbnailUrl": "https://via.placeholder.com/150/f0d2f4"
  },
  {
    "albumId": 4,
    "id": 185,
    "title": "at voluptatem repellat et voluptas eum est ipsum et",
    "url": "https://via.placeholder.com/600/d032c4",
    "thumbnailUrl": "https://via.placeholder.com/150/d032c4"
  },
  {
    "albumId": 4,
    "id": 186,
    "title": "incidunt sed libero non necessitatibus",
    "url": "https://via.placeholder.com/600/75999a",
    "thumbnailUrl": "https://via.placeholder.com/150/75999a"
  },
  {
    "albumId": 4,
    "id": 187,
    "title": "et aut ad dolor nam",
    "url": "https://via.placeholder.com/600/f63b02",
    "thumbnailUrl": "https://via.placeholder.com/150/f63b02"
  },
  {
    "albumId": 4,
    "id": 188,
    "title": "quae accusamus voluptas aperiam est amet",
    "url": "https://via.placeholder.com/600/40bdc9",
    "thumbnailUrl": "https://via.placeholder.com/150/40bdc9"
  },
  {
    "albumId": 4,
    "id": 189,
    "title": "esse ad quia ea est dicta soluta perspiciatis",
    "url": "https://via.placeholder.com/600/a75adc",
    "thumbnailUrl": "https://via.placeholder.com/150/a75adc"
  },
  {
    "albumId": 4,
    "id": 190,
    "title": "velit quasi incidunt molestiae ut ut ex hic cupiditate",
    "url": "https://via.placeholder.com/600/7dd663",
    "thumbnailUrl": "https://via.placeholder.com/150/7dd663"
  },
  {
    "albumId": 4,
    "id": 191,
    "title": "magni fuga alias non consectetur dolorum tempora",
    "url": "https://via.placeholder.com/600/258967",
    "thumbnailUrl": "https://via.placeholder.com/150/258967"
  },
  {
    "albumId": 4,
    "id": 192,
    "title": "non deleniti nihil provident eveniet",
    "url": "https://via.placeholder.com/600/70f7e3",
    "thumbnailUrl": "https://via.placeholder.com/150/70f7e3"
  },
  {
    "albumId": 4,
    "id": 193,
    "title": "mollitia ut minima totam distinctio provident quia non",
    "url": "https://via.placeholder.com/600/336fe7",
    "thumbnailUrl": "https://via.placeholder.com/150/336fe7"
  },
  {
    "albumId": 4,
    "id": 194,
    "title": "aut culpa magni aut officiis",
    "url": "https://via.placeholder.com/600/b98f29",
    "thumbnailUrl": "https://via.placeholder.com/150/b98f29"
  },
  {
    "albumId": 4,
    "id": 195,
    "title": "vel hic et autem quo soluta esse quasi",
    "url": "https://via.placeholder.com/600/973d6d",
    "thumbnailUrl": "https://via.placeholder.com/150/973d6d"
  },
  {
    "albumId": 4,
    "id": 196,
    "title": "amet maiores ut",
    "url": "https://via.placeholder.com/600/128151",
    "thumbnailUrl": "https://via.placeholder.com/150/128151"
  },
  {
    "albumId": 4,
    "id": 197,
    "title": "nobis ut iusto porro debitis vitae",
    "url": "https://via.placeholder.com/600/d1dd9e",
    "thumbnailUrl": "https://via.placeholder.com/150/d1dd9e"
  },
  {
    "albumId": 4,
    "id": 198,
    "title": "libero rem amet ipsam ullam illo excepturi rerum",
    "url": "https://via.placeholder.com/600/43803c",
    "thumbnailUrl": "https://via.placeholder.com/150/43803c"
  },
  {
    "albumId": 4,
    "id": 199,
    "title": "nobis sint assumenda consequatur laboriosam laudantium modi perferendis ea",
    "url": "https://via.placeholder.com/600/2da3b7",
    "thumbnailUrl": "https://via.placeholder.com/150/2da3b7"
  },
  {
    "albumId": 4,
    "id": 200,
    "title": "perspiciatis est commodi iste nulla et eveniet voluptates eum",
    "url": "https://via.placeholder.com/600/c3f384",
    "thumbnailUrl": "https://via.placeholder.com/150/c3f384"
  },
  {
    "albumId": 5,
    "id": 201,
    "title": "nesciunt dolorum consequatur ullam tempore accusamus debitis sit",
    "url": "https://via.placeholder.com/600/250289",
    "thumbnailUrl": "https://via.placeholder.com/150/250289"
  },
  {
    "albumId": 5,
    "id": 202,
    "title": "explicabo vel omnis corporis debitis qui qui",
    "url": "https://via.placeholder.com/600/6a0f83",
    "thumbnailUrl": "https://via.placeholder.com/150/6a0f83"
  },
  {
    "albumId": 5,
    "id": 203,
    "title": "labore vel voluptate ipsum quaerat debitis velit",
    "url": "https://via.placeholder.com/600/3a5c29",
    "thumbnailUrl": "https://via.placeholder.com/150/3a5c29"
  },
  {
    "albumId": 5,
    "id": 204,
    "title": "beatae est vel tenetur",
    "url": "https://via.placeholder.com/600/e4cc33",
    "thumbnailUrl": "https://via.placeholder.com/150/e4cc33"
  },
  {
    "albumId": 5,
    "id": 205,
    "title": "fugiat est ut ab sit et tempora",
    "url": "https://via.placeholder.com/600/dc17bf",
    "thumbnailUrl": "https://via.placeholder.com/150/dc17bf"
  },
  {
    "albumId": 5,
    "id": 206,
    "title": "possimus expedita ut",
    "url": "https://via.placeholder.com/600/d12649",
    "thumbnailUrl": "https://via.placeholder.com/150/d12649"
  },
  {
    "albumId": 5,
    "id": 207,
    "title": "culpa qui quos reiciendis aut nostrum et id temporibus",
    "url": "https://via.placeholder.com/600/a1ff25",
    "thumbnailUrl": "https://via.placeholder.com/150/a1ff25"
  },
  {
    "albumId": 5,
    "id": 208,
    "title": "ut voluptatem maiores nam ipsa beatae",
    "url": "https://via.placeholder.com/600/40d9b8",
    "thumbnailUrl": "https://via.placeholder.com/150/40d9b8"
  },
  {
    "albumId": 5,
    "id": 209,
    "title": "voluptatibus sit amet vel natus qui voluptatem",
    "url": "https://via.placeholder.com/600/88c71d",
    "thumbnailUrl": "https://via.placeholder.com/150/88c71d"
  },
  {
    "albumId": 5,
    "id": 210,
    "title": "et nisi tenetur nam amet sed",
    "url": "https://via.placeholder.com/600/67d26",
    "thumbnailUrl": "https://via.placeholder.com/150/67d26"
  },
  {
    "albumId": 5,
    "id": 211,
    "title": "est qui ratione",
    "url": "https://via.placeholder.com/600/918fb8",
    "thumbnailUrl": "https://via.placeholder.com/150/918fb8"
  },
  {
    "albumId": 5,
    "id": 212,
    "title": "id exercitationem doloremque vel provident et ea",
    "url": "https://via.placeholder.com/600/9fa1a5",
    "thumbnailUrl": "https://via.placeholder.com/150/9fa1a5"
  },
  {
    "albumId": 5,
    "id": 213,
    "title": "sed cum aut",
    "url": "https://via.placeholder.com/600/d2d7f0",
    "thumbnailUrl": "https://via.placeholder.com/150/d2d7f0"
  },
  {
    "albumId": 5,
    "id": 214,
    "title": "quis explicabo autem",
    "url": "https://via.placeholder.com/600/511b3c",
    "thumbnailUrl": "https://via.placeholder.com/150/511b3c"
  },
  {
    "albumId": 5,
    "id": 215,
    "title": "in magnam praesentium ab illum",
    "url": "https://via.placeholder.com/600/15834f",
    "thumbnailUrl": "https://via.placeholder.com/150/15834f"
  },
  {
    "albumId": 5,
    "id": 216,
    "title": "itaque nihil voluptatum",
    "url": "https://via.placeholder.com/600/310675",
    "thumbnailUrl": "https://via.placeholder.com/150/310675"
  },
  {
    "albumId": 5,
    "id": 217,
    "title": "ab ut placeat fuga",
    "url": "https://via.placeholder.com/600/4f64e8",
    "thumbnailUrl": "https://via.placeholder.com/150/4f64e8"
  },
  {
    "albumId": 5,
    "id": 218,
    "title": "neque placeat dolore assumenda repellat eius ut commodi",
    "url": "https://via.placeholder.com/600/b27684",
    "thumbnailUrl": "https://via.placeholder.com/150/b27684"
  },
  {
    "albumId": 5,
    "id": 219,
    "title": "nihil accusantium quos ipsam ut a",
    "url": "https://via.placeholder.com/600/77f823",
    "thumbnailUrl": "https://via.placeholder.com/150/77f823"
  },
  {
    "albumId": 5,
    "id": 220,
    "title": "ratione vel quas nostrum et eius est",
    "url": "https://via.placeholder.com/600/53f7dd",
    "thumbnailUrl": "https://via.placeholder.com/150/53f7dd"
  },
  {
    "albumId": 5,
    "id": 221,
    "title": "et iusto ratione maiores magnam animi itaque id",
    "url": "https://via.placeholder.com/600/2f27c7",
    "thumbnailUrl": "https://via.placeholder.com/150/2f27c7"
  },
  {
    "albumId": 5,
    "id": 222,
    "title": "et molestiae sint voluptas officiis voluptates recusandae laborum et",
    "url": "https://via.placeholder.com/600/dccf6e",
    "thumbnailUrl": "https://via.placeholder.com/150/dccf6e"
  },
  {
    "albumId": 5,
    "id": 223,
    "title": "qui beatae ea magnam nulla facilis voluptas",
    "url": "https://via.placeholder.com/600/5a65f7",
    "thumbnailUrl": "https://via.placeholder.com/150/5a65f7"
  },
  {
    "albumId": 5,
    "id": 224,
    "title": "omnis asperiores et velit fugit numquam tenetur et",
    "url": "https://via.placeholder.com/600/b273e9",
    "thumbnailUrl": "https://via.placeholder.com/150/b273e9"
  },
  {
    "albumId": 5,
    "id": 225,
    "title": "eum magnam expedita velit et vitae autem cupiditate",
    "url": "https://via.placeholder.com/600/21f8c2",
    "thumbnailUrl": "https://via.placeholder.com/150/21f8c2"
  },
  {
    "albumId": 5,
    "id": 226,
    "title": "omnis accusantium et",
    "url": "https://via.placeholder.com/600/135ce6",
    "thumbnailUrl": "https://via.placeholder.com/150/135ce6"
  },
  {
    "albumId": 5,
    "id": 227,
    "title": "quae facere aut",
    "url": "https://via.placeholder.com/600/3c1e25",
    "thumbnailUrl": "https://via.placeholder.com/150/3c1e25"
  },
  {
    "albumId": 5,
    "id": 228,
    "title": "laudantium magnam et culpa dolores harum ipsam",
    "url": "https://via.placeholder.com/600/d8b6fa",
    "thumbnailUrl": "https://via.placeholder.com/150/d8b6fa"
  },
  {
    "albumId": 5,
    "id": 229,
    "title": "fugit ut nostrum quia in laborum",
    "url": "https://via.placeholder.com/600/9d3896",
    "thumbnailUrl": "https://via.placeholder.com/150/9d3896"
  },
  {
    "albumId": 5,
    "id": 230,
    "title": "a deleniti quae exercitationem aut et reprehenderit",
    "url": "https://via.placeholder.com/600/b24645",
    "thumbnailUrl": "https://via.placeholder.com/150/b24645"
  },
  {
    "albumId": 5,
    "id": 231,
    "title": "placeat cumque ea accusamus quo veniam perspiciatis illo",
    "url": "https://via.placeholder.com/600/ea3fb1",
    "thumbnailUrl": "https://via.placeholder.com/150/ea3fb1"
  },
  {
    "albumId": 5,
    "id": 232,
    "title": "ea dicta velit dolorem ratione doloribus",
    "url": "https://via.placeholder.com/600/92b48b",
    "thumbnailUrl": "https://via.placeholder.com/150/92b48b"
  },
  {
    "albumId": 5,
    "id": 233,
    "title": "nesciunt dignissimos perspiciatis sint veritatis vero facere ipsa id",
    "url": "https://via.placeholder.com/600/5e440",
    "thumbnailUrl": "https://via.placeholder.com/150/5e440"
  },
  {
    "albumId": 5,
    "id": 234,
    "title": "qui laboriosam et quae consequatur",
    "url": "https://via.placeholder.com/600/c52dc0",
    "thumbnailUrl": "https://via.placeholder.com/150/c52dc0"
  },
  {
    "albumId": 5,
    "id": 235,
    "title": "officiis consequatur necessitatibus id beatae voluptatem in sit dolorem",
    "url": "https://via.placeholder.com/600/72ce88",
    "thumbnailUrl": "https://via.placeholder.com/150/72ce88"
  },
  {
    "albumId": 5,
    "id": 236,
    "title": "cumque nihil ullam laborum ut et",
    "url": "https://via.placeholder.com/600/423b8d",
    "thumbnailUrl": "https://via.placeholder.com/150/423b8d"
  },
  {
    "albumId": 5,
    "id": 237,
    "title": "vel quam tempore dolor eveniet",
    "url": "https://via.placeholder.com/600/b4e761",
    "thumbnailUrl": "https://via.placeholder.com/150/b4e761"
  },
  {
    "albumId": 5,
    "id": 238,
    "title": "aperiam mollitia nisi sed ad magnam repellendus et",
    "url": "https://via.placeholder.com/600/80e9fe",
    "thumbnailUrl": "https://via.placeholder.com/150/80e9fe"
  },
  {
    "albumId": 5,
    "id": 239,
    "title": "incidunt aliquid possimus",
    "url": "https://via.placeholder.com/600/c6a0c",
    "thumbnailUrl": "https://via.placeholder.com/150/c6a0c"
  },
  {
    "albumId": 5,
    "id": 240,
    "title": "rem neque reprehenderit",
    "url": "https://via.placeholder.com/600/55ccaa",
    "thumbnailUrl": "https://via.placeholder.com/150/55ccaa"
  },
  {
    "albumId": 5,
    "id": 241,
    "title": "magni expedita saepe tempore nulla officiis",
    "url": "https://via.placeholder.com/600/af3ad6",
    "thumbnailUrl": "https://via.placeholder.com/150/af3ad6"
  },
  {
    "albumId": 5,
    "id": 242,
    "title": "vitae ut sequi explicabo perspiciatis repudiandae omnis et qui",
    "url": "https://via.placeholder.com/600/cc2282",
    "thumbnailUrl": "https://via.placeholder.com/150/cc2282"
  },
  {
    "albumId": 5,
    "id": 243,
    "title": "sed nobis consequatur dolores",
    "url": "https://via.placeholder.com/600/ad65d5",
    "thumbnailUrl": "https://via.placeholder.com/150/ad65d5"
  },
  {
    "albumId": 5,
    "id": 244,
    "title": "aut doloribus quia unde quia",
    "url": "https://via.placeholder.com/600/2a9243",
    "thumbnailUrl": "https://via.placeholder.com/150/2a9243"
  },
  {
    "albumId": 5,
    "id": 245,
    "title": "iusto ut et ea voluptas voluptatum aut eum",
    "url": "https://via.placeholder.com/600/a81869",
    "thumbnailUrl": "https://via.placeholder.com/150/a81869"
  },
  {
    "albumId": 5,
    "id": 246,
    "title": "voluptatibus reiciendis ipsa exercitationem saepe quos architecto veniam aperiam",
    "url": "https://via.placeholder.com/600/3a14eb",
    "thumbnailUrl": "https://via.placeholder.com/150/3a14eb"
  },
  {
    "albumId": 5,
    "id": 247,
    "title": "ducimus provident possimus",
    "url": "https://via.placeholder.com/600/7f47e7",
    "thumbnailUrl": "https://via.placeholder.com/150/7f47e7"
  },
  {
    "albumId": 5,
    "id": 248,
    "title": "doloremque autem similique et beatae cupiditate sed nulla",
    "url": "https://via.placeholder.com/600/c757e5",
    "thumbnailUrl": "https://via.placeholder.com/150/c757e5"
  },
  {
    "albumId": 5,
    "id": 249,
    "title": "quia ipsum ut voluptatem saepe nam ipsam beatae",
    "url": "https://via.placeholder.com/600/54c842",
    "thumbnailUrl": "https://via.placeholder.com/150/54c842"
  },
  {
    "albumId": 5,
    "id": 250,
    "title": "voluptatem repellendus voluptatibus id occaecati ipsam dignissimos officia",
    "url": "https://via.placeholder.com/600/e33ffb",
    "thumbnailUrl": "https://via.placeholder.com/150/e33ffb"
  }];

const photoDataValues = photosData.map((photo) => [
  photo.albumId,
  photo.id,
  photo.title,
  photo.url,
  photo.thumbnailUrl]
 );
const insertPhotoQuery = 'INSERT INTO photos VALUES ?';
  
const createNewUsersTable =`
    CREATE TABLE IF NOT EXISTS newUsers (
      username VARCHAR(255) PRIMARY KEY  NOT NULL,
      password VARCHAR(255) NOT NULL
    )
  `;
const newUsersData=[
  {"username":"Bret","password":"1234"},
  {"username":"Antonette","password":"5678"}];

  const newUserDataValues = newUsersData.map((user) => [
    user.username,
    user.password]
   );
   const insertnewUserQuery = 'INSERT INTO newUsers VALUES ?';


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(createUsersTableQuery, (err, results) => {
    if (err)throw err
    console.log('Users table created successfully');    
  });
  // con.query(insertUserQuery, [userDataValues], (err, results) => {
  // if (err)throw err
  // console.log('Users data inserted successfully');  
  // }); 
  con.query(createTodosTableQuery, (err, results) => {
    if (err)throw err
    console.log('Todo table created successfully');    
  });
  // con.query(insertTodoQuery, [todoDataValues], (err, results) => {
  //   if (err)throw err
  //   console.log('Todos data inserted successfully');  
  //   }); 
  con.query(createPostsTableQuery, (err, results) => {
    if (err)throw err
    console.log('Posts table created successfully');    
    });
  con.query(insertPostQuery, [postDataValues], (err, results) => {
      if (err)throw err
      console.log('Posts data inserted successfully');  
      });
  con.query(createCommentsTableQuery, (err, results) => {
        if (err)throw err
        console.log('table created successfully');    
      }); 
   con.query(insertCommentQuery, [commentDataValues], (err, results) => {
        if (err)throw err
        console.log('Comments data inserted successfully');  
        });
  con.query(createAlbumsTableQuery, (err, results) => {
          if (err)throw err
          console.log('table created successfully');    
        });
  con.query(insertAlbumQuery, [albumDataValues], (err, results) => {
    if (err)throw err
        console.log('Albums data inserted successfully');  
      });
      con.query(createPhotosTableQuery, (err, results) => {
        if (err)throw err
        console.log('Photos table created successfully');    
      });
      con.query(insertPhotoQuery, [photoDataValues], (err, results) => {
        if (err)throw err
        console.log('Photos data inserted successfully');  
        }); 
        con.query(createNewUsersTable, (err, results) => {
          if (err)throw err
          console.log('Users table created successfully');    
        });
     con.query(insertnewUserQuery, [newUserDataValues], (err, results) => {
          if (err)throw err
          console.log('users data inserted successfully');  
          });
  con.end(); // Close the database connection

});

