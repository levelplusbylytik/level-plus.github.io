const bodyDetails = document.querySelector("body");
const urlParams = new URLSearchParams(window.location.search);
const cardId = urlParams.get("id");
const cardsFromServer = [
    {
      id: 1,
      name: "Minecraft ",
      rating:"9",
      system:"The minimum system requirements for Minecraft are nothing to scoff at. While you only need 2 GB of RAM to pass, your PC will need at least a DX 11.0 GPU, such as an Intel HD Graphics 4000, a GeForce 400 series card, or a Radeon HD 7000 series card",
      description:"In Minecraft, players explore a procedurally generated, three-dimensional world with virtually infinite terrain made up of voxels. Players can discover and extract raw materials, craft tools and items, and build structures, earthworks, and machines.",
      downloadLink: "https://drive.google.com/file/d/15dx8xQDaEMCktl7bxmcOQEA4K_R0NIaZ/view?usp=sharing",
      platformGame: "Mobile",
      imageLink: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23BR5V/807627b274ee47a2a4e20bc010ec4d5e.png/f/minecraft-java-bedrock-edition.png",
    },
    {
      id: 2,
      name: "Far Cry 1",
      rating:"8.8",
      description:"The game's story follows a retired U.S. Army Special Forces soldier stranded on a mysterious archipelago. He is searching for a female journalist named Valerie Constantine, after she went missing when their boat was destroyed by mercenaries.",
      system:"To run the original Far Cry system requirements, you will need a modern graphics card GPU, an Intel Core 2 Duo E8400 CPU, 256MB of RAM, and 4GB of free HD space. In terms of game file size, you will need at least 4 GB of free disk space available.",
      downloadLink: "https://drive.google.com/file/d/1_1EK5A9Gb6LnC_cxqSc9VRFDebp3I5hW/view?usp=sharing",
      platformGame: "PC",
      imageLink: "https://m.media-amazon.com/images/I/71hBqz8HYTL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      name: "NFS Underground 1+2",
      rating:"8.3",
      description:"Need for Speed: Underground completely redesigned the series' formula with a heavy emphasis on tuner culture and a storyline-driven career mode. All races take place in a generic city at night, featuring vehicles associated with the import scene rather than exotic cars.",
      system:"Need for Speed: Underground 2 System Requirements (Minimum) CPU: Pentium III or Athlon XP. CPU SPEED: 933 mhz. RAM: 256 MB. VIDEO CARD: AGP Video Card with 32 MB and a DirectX 8.1 compatible driver (GeForce2+ /Radeon 7500+) TOTAL VIDEO RAM: 32 MB.",
      downloadLink: "https://drive.google.com/file/d/1xXRaXIYh9acaVDPJTAMcQYeyIafqV3X9/view?usp=sharing",
      platformGame: "PC + Playstation 2",
      imageLink: "https://assets-prd.ignimgs.com/2022/02/08/nfsunderground-sq-1644282923090.jpg",
    },
    {
      id: 4,
      name: "Red Dead Redemption 2",
      rating:"8.5",
      description:"After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.",
      system:"To run the Red Dead Redemption 2 system requirements, you will need an NVIDIA GeForce GTX 770 GPU, an Intel Core i5-2500K CPU, 8GB of RAM, and 150GB of space. Saddle up folks, and see if your PC can run the Red Dead Redemption 2 PC requirements.",
      downloadLink: "https://drive.google.com/file/d/1i0YzYaqy3TwyMQGoOoDXxjWwBvYMYyTc/view?usp=sharing",
      platformGame: "PC, PS4, Xbox One",
      imageLink: "data:image/jpeg;base64,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",
    },
    {
      id: 5,
      name: "My Summer Car",
      rating:"7.1",
      description:"My Summer Car is the ultimate car owning, building, fixing, tuning, maintenance AND permadeath life survival simulator. You start the game with hundreds of loose parts and assemble both car and engine. Recent Reviews: Very Positive (1,646) - 94% of the 1,646 user reviews in the last 30 days are positive.",
      system:"The minimum memory requirement for My Summer Car is 6 GB of RAM installed in your computer. If possible, make sure your have 8 GB of RAM in order to run My Summer Car to its full potential. An Intel Core 2 Duo Q6867 CPU is required at a minimum to run My Summer Car.",
      downloadLink: "https://drive.google.com/file/d/1YVY20rmwYF7j4Se1Ory8_CM_mHvDj6Tu/view?usp=sharing",
      platformGame: "PC",
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fiRkAw7gOrgJVFZDTPzGrTUZ51_-uw9Siw&s",
    },
    {
      id: 6,
      name: "Besiege",
      rating:"7.5",
      description:"to surround a place, esp. with an army, to prevent people or supplies from getting in or out: fig.",
      system:"OS: Windows 10. Processor: 4Ghz Quad Core. Memory: 8 GB RAM. Graphics: 3 GB Dedicated VRAM.",
      downloadLink: "https://drive.google.com/file/d/1sE3UW3fN66EknoSNHqDhRSnpvgLSPCZp/view?usp=sharing",
      platformGame: "PC",
      imageLink: "https://howlongtobeat.com/games/23963_Besiege.jpg",
    },
    {
      id: 7,
      name: "The Long Drive",
      rating:"7.0",
      description:"This is a road trip game in an almost infinite random generated desert. The focus is on freedom, driving, exploration and immersion. It has minimal car maintenance and survival elements.",
      system:"An Intel Core 2 Duo Q6867 CPU is required at a minimum to run The Long Drive. Whereas, an Intel Core i5-1300F is recommended in order to run it. You will need at least 700 MB of free disk space to install The Long Drive. The Long Drive will run on PC system with Windows 10 64bit and upwards.",
      downloadLink: "https://drive.google.com/file/d/1kGAjQsfxg7wrR_WQu1I6mvG5gV8GD3WX/view?usp=sharing",
      platformGame: "PC",
      imageLink: "https://newzoo.com/wp-content/uploads/api/games/artworks/game--the-long-drive.jpg",
    },
    {
      id: 8,
      name: "Yehor Sandbox Offical Game✅",
      rating:"5.0",
      description:"GOOD SANDBOX GAME FOR LOW PHONES IN THIS SANDBOX GAME YOU HAVE 20 ITEMS AND YOU PLAY AS A CAT",
      system:"Phone with android 6 or better",
      downloadLink: "https://drive.google.com/file/d/15dx8xQDaEMCktl7bxmcOQEA4K_R0NIaZ/view?usp=sharing",
      platformGame: " Mobile",
      imageLink: "https://img.itch.zone/aW1nLzE1MTQ3Mzc3LmpwZw==/315x250%23c/VMFpgl.jpg",
    },
    {
      id: 9,
      name: "Here can be you'r ads !",
      rating:"10",
      description:"order a ads",
      system:"all",
      downloadLink: "https://t.me/+M7y54QKSCv1lODUy",
      platformGame: "PC, Switch, PS4, Xbox One, Mobile",
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPtvwppzRPe_HLwdlfSr0HQFRrNrlLbexhQ&s",
    },
    {
      id: 10,
      name: "Submit you'r game!",
      rating:"10",
      description:"submit you'r game",
      system:"all",
      downloadLink: "https://t.me/+Gbp5wNg7WHFjN2Ey",
      platformGame: "PC, PS4, Xbox One, Switch , Mobile",
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQizBwa1JX0hWg0UNA_ZjHvqK7OVRFBH60jQ&s",
    },
    {
      id: 11,
      name: "CountryBattles Offical Game✅",
      rating:"5.9",
      description:"brawl of countrys ",
      system:"android 9 or better",
      downloadLink: "https://drive.google.com/file/d/1ESxCqI1xwPMQseB_97gedvwuzK_D7CMB/view?usp=sharing",
      platformGame: "Mobile",
      imageLink: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Polandball.png",
    },
    {
      id: 12,
      name: "Norbert's diary Offical Game✅ ",
      rating:"6.9",
      description:"Norbert's Diary is a single-player indie horror game with simulator elements, in which the player imagines himself as a young Norbert who decided to rent a gas station in the wilderness of Adygea. You have a difficult choice - to lower prices or raise them? In addition to threats from bankruptcy, you may be killed or kidnapped. But do you need it? Of course not.",
      system:"Requires 64-bit processor and operating system  Windows 10 or higher, 64-bit 2.6 GHz, 4 threads and 2 cores or similar  6 GB OP  GeForce GTX 1650  version 10  3 GB available space ",
      downloadLink: "https://drive.google.com/file/d/1GNASbXLgmnGgrnxjppW0myHPemrdp0bE/view?usp=sharing",
      platformGame: "PC",
      imageLink: "https://images.igdb.com/igdb/image/upload/t_cover_big/co8k12.webp",
    },
    {
      id: 13,
      name: "Granny",
      rating:"7.3",
      description:"a grandmother. an elderly woman. a fussy person. Chiefly Midland and Southern U.S. a nurse or midwife.",
      system:"The minimum memory requirement for Granny is 4 GB of RAM installed in your computer. To play Granny you will need a minimum CPU equivalent to an Intel Core i5-750. You will need at least 1 GB of free disk space to install Granny. Provided that you have at least an ATI Radeon HD 5770 graphics card you can play the game.",
      downloadLink: "https://drive.google.com/file/d/1Yoz9N8y3N4BjnFUdXtynR-dCylSK7385/view?usp=sharing",
      platformGame: " Mobile",
      imageLink: "https://play-lh.googleusercontent.com/yT_LBq_tyKeIDohKDsqN_Qt18jGIPUYIxY2C-1-E2YA9Qd60uZW08pua17qBmIiDPA=w240-h480-rw",
    },
    {
      id: 14,
      name: "Ravenfield",
      rating:"7.4",
      description:"Ravenfield consists of multiple team game modes that revolve around capturing flags on a given map, and gaining points by killing members of the enemy team. The game is inspired by other multiplayer first-person shooter games such as Battlefield and Call of Duty.",
      system:"android 9 of better",
      downloadLink: "https://drive.google.com/file/d/1WBgV18nHYCJAAJVDnqoqh4paImB8jqx9/view?usp=sharing",
      platformGame: "Mobile",
      imageLink: "https://static-cdn.jtvnw.net/ttv-boxart/494655_IGDB-272x380.jpg",
    },
    {
      id: 15,
      name: "TLD+ Offical Game✅ ",
      rating:"5.1",
      description:"THE GAME IS THE CONTINUATION OF THE HISTORY OF THE LAST DAY OF THE WORLD+. Here, on a new map, with new 3D graphics, new monsters, new modes and a choice of difficulty, you have to go through the entire game. There are 3 difficulty modes in total, the atmosphere of the game is similar to Half Life 2 and Postal.",
      system:"the minimum memory requirment is 1 gb , RAM 8GB , intel core i5 3770 , nvidia gt 650QM",
      downloadLink: "https://drive.google.com/file/d/19irN90pVEvs9YKoeulIQFkiONEQtdQG4/view?usp=sharing",
      platformGame: "PC",
      imageLink: "https://img.itch.zone/aW1nLzE1OTkyOTM1LnBuZw==/315x250%23c/eqMUje.png",
    },
    {
      id: 16,
      name: "TLD Offical Game✅",
      rating:"4.6",
      description:"left for dead 2 but bed ",
      system :"android 9 or better",
      downloadLink: "https://drive.google.com/file/d/11qBBew2VJaDSh5QCa9IZ4D28HsXDmnT0/view?usp=sharing",
      platformGame: "Mobile",
      imageLink: "https://img.itch.zone/aW1nLzE0NzIwNDI2LmpwZw==/315x250%23c/I9gpVf.jpg",
    },
    {
      id: 17,
      name: "Tank Of Strike Offical Game✅ ",
      rating:"4.3",
      description:"world of tanks but bed ",
      system:"the minimum memory requirment is 1 gb , RAM 8GB , intel core i5 3770 , nvidia gt 650QM",
      downloadLink: "https://drive.google.com/file/d/17Vg8xSZezl7rNoQdPhBIeV6r1bwvLl2v/view?usp=sharing",
      platformGame: "PC",
      imageLink: "https://img.itch.zone/aW1nLzE3OTAwNzQ4LmpwZw==/original/hcJI9t.jpg",
    },
    {
      id: 18, 
      name: "UST 25           Offical Game✅ ",
      rating:"6.7",
      description:"UST 25 is a fast-paced football game where players can manage their teams and compete in intense football matches. The game offers exciting gameplay that combines realistic player movements and quick changes in game situations on the field. Strive for victory, develop tactics and defeat your opponents in every match!",
      system:"the minimum memory requirment is 1 gb , RAM 8GB , intel core i5 3770 , nvidia gt 650QM",
      downloadLink: "https://playoverwatch.com/en-us/",
      platformGame: "PC",
      imageLink: "https://img.itch.zone/aW1nLzE4MDc1NjUzLmpwZw==/315x250%23c/feqsvY.jpg",
    },
   
    {
      id: 20,
      name: "Ghost of Tsushima",
      downloadLink: "https://www.playstation.com/en-us/games/ghost-of-tsushima/",
      platformGame: "PS4, PS5",
      imageLink: "https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg",
    },
    {
      id: 21,
      name: "Final Fantasy VII Remake",
      downloadLink: "https://ffvii-remake.square-enix-games.com/",
      platformGame: "PS4, PS5, PC",
      imageLink: "https://upload.wikimedia.org/wikipedia/en/c/ce/FFVIIRemake.png",
    },
    {
      id: 22,
      name: "Dying Light 2",
      downloadLink: "https://dyinglight2.com/",
      platformGame: "PC, PS4, PS5, Xbox One, Xbox Series X/S",
      imageLink: "https://upload.wikimedia.org/wikipedia/en/6/6d/Dying_Light_2_cover_art.jpg",
    },
    {
      id: 23,
      name: "Hollow Knight",
      downloadLink: "https://hollowknight.com/",
      platformGame: "PC, PS4, Xbox One, Switch",
      imageLink: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Hollow_Knight_first_cover_art.webp/274px-Hollow_Knight_first_cover_art.webp.png",
    },
    {
      id: 24,
      name: "Monster Hunter: World",
      downloadLink: "https://www.monsterhunter.com/world/",
      platformGame: "PC, PS4, Xbox One",
      imageLink: "https://upload.wikimedia.org/wikipedia/en/1/1b/Monster_Hunter_World_cover_art.jpg",
    },
    {
      id: 25,
      name: "Fall Guys: Ultimate Knockout",
      downloadLink: "https://fallguys.com/",
      platformGame: "PC, PS4, PS5, Xbox One, Switch",
      imageLink: "https://img-grouvee-com.b-cdn.net/upload/cache/c9/4c/c94c6dd9abc558d6a7af64b612a4d553.jpg",
    },
    {
      id: 26,
      name: "Fall Guys: Ultimate Knockout",
      downloadLink: "https://fallguys.com/",
      platformGame: "PC, PS4, PS5, Xbox One, Switch",
      imageLink: "https://img-grouvee-com.b-cdn.net/upload/cache/c9/4c/c94c6dd9abc558d6a7af64b612a4d553.jpg",
    },
  ];

  function renderDetails(content) {
  const details = document.createElement("div");
  details.classList.add("view");
  details.innerHTML = `
      <div class="pre">
      <div class="wrapper-img">
      <img class="pre-bunner" src="${content.imageLink}" />
      </div>
      <h1>${content.name}</h1>
      <div class="characteristic">
        <a
          class="btn"
          href="${content.downloadLink}"
          target="_blank"
          >download</a
        >
        
        <img
          src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
        />
        <h1>${content.rating}/10</h1>
      </div>
    </div>
    <h1>
    ${content.description}
    </h1>
    <div class="second">
      <h1>System required:</h1>
      <h1>${content.system}</h1>
 `;
  bodyDetails.appendChild(details);
  };
  const card = cardsFromServer.find((card) => card.id === Number(cardId));
  renderDetails(card);