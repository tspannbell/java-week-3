function run(){
    console.log("Swimming is a wonderful sport")
 }
function fetchJob(){
    console.log(this.name + " "+"is a"+ " "+ this.job);
}

function person(name, job, age){
    this.name = "John Doe";
    this.job = "Driver";
    this.age = 24;
    run();
    fetchJob()
    
    }
person();
    function Programmer(name, job, age, languages){
        this.name;
        this.job;
        this.age;
        this.languages;
    }