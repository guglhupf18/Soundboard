
    var tomArray = new Array(5);
    var hihatArray= new Array(5);
    var kickArray= new Array(5);
    var snareArray= new Array(5);
    var soundLibraryArray = [tomArray, hihatArray, kickArray, snareArray];

    SetUpArrays();
    function SetUpArrays(){
      var i;
      for (i = 0; i<tomArray.length; i++){
       tomArray[i] = "audio/tom/tom"+[i]+".wav";
      }
      for (i = 0; i<hihatArray.length; i++){
       hihatArray[i] = "audio/hihat/hihat"+[i]+".wav";
      }
      for (i = 0; i<kickArray.length; i++){
       kickArray[i] = "audio/kick/kick"+[i]+".wav";
      }
      for (i = 0; i<snareArray.length; i++){
       snareArray[i] = "audio/snare/snare"+[i]+".wav";
      }
    }
    // Variabel dynamisch erstellen?
    var sound0 = document.createElement('audio');
    var sound1 = document.createElement('audio');
    var sound2 = document.createElement('audio');
    var sound3 = document.createElement('audio');
    var activeSound = [sound0,sound1,sound2,sound3];
    var activeButton = new Array (4);
    var oldButton = new Array(4);

    function PlaySound(row, column){
      // Set the sound according to the clicked button
      activeSound[row].src = soundLibraryArray[row][column];

      // TODO deactivate loop on second click
      if(document.getElementById("loop"+[row]).checked)
      {
        activeSound[row].loop = true;
      }
      else{
        activeSound[row].loop = false;
      }
      // TODO only play when the other sounds are finished to sync?
      activeSound[row].pause();
      activeSound[row].currentTime = 0;
      activeSound[row].play();
      // Highlight button

        if(activeButton[row] == null){
           var button = document.getElementById("button"+[row]+[column]);
           activeButton[row] = button;
           activeButton[row].classList.remove("buttonInactive");
           activeButton[row].classList.add("button"+[row]);
        }
        else{
          oldButton[row] = activeButton[row];
          oldButton[row].classList.remove("button"+[row]);
          oldButton[row].classList.add("buttonInactive");
          var button = document.getElementById("button"+[row]+[column]);
          activeButton[row] = button;
          activeButton[row].classList.remove("buttonInactive");
          activeButton[row].classList.add("button"+[row]);
          console.log("huhu")
        }
    }
