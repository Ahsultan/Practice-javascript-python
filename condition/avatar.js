let name = "sultan";
let initials = '';
for(let i = 0; i < this.name.length; i++){
    if(this.name.charAt(i) === ' '){
      continue;
    }

    if (this.name.charAt(i) === this.name.charAt(i).toUpperCase()){
      initials += this.name.charAt(i);

      if(initials.length == 2){
        break;
      }
    }
  }

  console.log(initials);