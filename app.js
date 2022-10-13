class Employee {
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }

    showInfos(){
        console.log("İsim: "+this.name,"Yaş: "+this.age,"Maaş: "+this.salary);        
    }

}

const emp=new Employee("fatih",39,40000);
//console.log(emp);
emp.showInfos();