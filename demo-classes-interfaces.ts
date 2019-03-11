class MyClass {
    private myStringMember: string;
	protected myNumberMember: number;
	public myPublicMember: string;
    
    public constructor() {
        this.myStringMember = 'str';
		this.myNumberMember = 10;
		this.myPublicMember = '';
	}
	
	public getName() {
		return this.myPublicMember;
	}
}

// let response = new MyClass();
// response.myPublicMember = '12';


//----> Abstract Classes
abstract class MyAbstractClass {
    abstract myAbstractMethod(): void;
    abstract myAbstractStringMember: string;
    
    constructor() {
        this.myMethod();
    }
    
    myMethod() {
        this.myAbstractMethod();
    }
}

// example
class MyNewClass extends MyAbstractClass {
    myAbstractStringMember: string = 'str';
    myAbstractMethod(): void {
        // code
    };
}
// new MyAbstractClass() // error
new MyNewClass().myAbstractStringMember; // 'str'


//---> Interfaces

