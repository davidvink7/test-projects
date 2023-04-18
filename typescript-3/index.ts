type Salutation = {greeting:string, name:string}

function greet({greeting, name}:Salutation){
  return `${greeting}, ${name}!`
}

const message:string = greet({greeting: "hello", name: "David"})
