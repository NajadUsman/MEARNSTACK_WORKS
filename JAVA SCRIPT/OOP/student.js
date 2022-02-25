class student{
    // setStudent(rollno,sname,course,total)
    constructor(rollno,sname,course,total)
    {
    this.roll=rollno
    this.name=sname
    this.course=course
    this.total=total

    }

    printStudent()
    {
        console.log(this.roll,this.name,this.course,this.total);
    }
}

var st=new student(101,"najad","mca",500)
// st.setStudent(101,"najad","mca",500)
st.printStudent()

// variables are prepended with this instance variable
// setStudent=>initializing instance variable
// constructotr=>initializing instance variable
// phython=>init()
// java=>same as classname
// js=>constructor=>when object is created constructor automattically called


