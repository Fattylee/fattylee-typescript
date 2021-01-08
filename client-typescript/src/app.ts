import { sum } from "./utils";

// project-list
class ProjectList {
  targetElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  projectList: HTMLElement;

  constructor(private readonly type: "active" | "finished") {
    this.targetElement = document.getElementById(
      "project-list"
    ) as HTMLTemplateElement;

    this.hostElement = document.querySelector("#app-project");

    this.projectList = document.importNode(this.targetElement.content, true)
      .firstElementChild as HTMLElement;

    this.renderedContent();
    this.attach();
  }

  private renderedContent() {
    this.projectList.querySelector(
      "section h2"
    ).textContent = `${this.type.toUpperCase()} PROJECTS`;

    this.projectList.className = `${this.type}-project`;

    this.projectList.querySelector("ul").id = `${this.type}-project-list`;
  }
  private attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.projectList);
  }
}

class ProjectInput {
  targetElement: HTMLTemplateElement;
  hostEement: HTMLDivElement;
  formElement: HTMLFormElement;
  titleInput: HTMLInputElement;
  descriptionInput: HTMLTextAreaElement;
  peopleInput: HTMLInputElement;

  constructor() {
    this.targetElement = <HTMLTemplateElement>(
      document.getElementById("project-input")!
    );
    this.hostEement = document.getElementById("app-project")! as HTMLDivElement;

    this.formElement = <HTMLFormElement>(
      document.importNode(this.targetElement.content, true).firstElementChild!
    );

    // initialize inputs
    this.titleInput = this.formElement.querySelector(
      "#title"
    )! as HTMLInputElement;
    this.descriptionInput = <HTMLTextAreaElement>(
      this.formElement.querySelector("#description")
    );
    this.peopleInput = <HTMLInputElement>(
      this.formElement.querySelector("#people")
    );

    this.configure();
    this.render();
  }

  // @Deco()
  private configure() {
    this.formElement.addEventListener("submit", this.handleSubmit.bind(this));
  }

  private handleSubmit(event: Event) {
    event.preventDefault();
    console.log(this.titleInput.value);
    console.log(this.descriptionInput.value);
    console.log(this.peopleInput.value);
  }

  private render() {
    this.hostEement.insertAdjacentElement("afterbegin", this.formElement);
  }
}

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
// console.log(sum(2, 98));

function Deco() {
  return function (target: any, name: any, prop?: any) {
    return class Mount extends target {
      constructor() {
        super();
        console.log(target, "====target====");
        console.log(name, "========name===============", typeof name);
        console.log(prop, "===============prop==============");
      }
    };
  };
}

function myThis(_params: any) {
  this.name = "name";
  this.age = 23;

  this.obj = {
    // name: "obj",
    lost: () => {
      console.log(this.name);
    },
  };

  this.meth = function meth() {
    console.log(this);
    console.log("====================");
    new not();
  };

  function not() {
    // this.fat = "fat";
    console.log(this);
    console.log("====================");
  }

  // console.log(this);
}
const o = new myThis(9);
// console.log(o.obj.lost());

// o.meth();
class Slot {
  sex: string = "male";
  constructor() {
    console.log(this);
  }
  mama() {
    // console.log(this);
    const btn = document.getElementById("submit")!;

    console.log(btn);
    btn.addEventListener("click", this.handle);
  }

  handle(e: Event) {
    console.log("btn clicked!!");
    console.log(this);
  }
}

// const slot: Slot = new Slot();

// console.log(slot);

// const temp = slot.mama.bind(slot);
// slot.mama();

// temp();

// var john = {
//   name: "John",
//   sayHi: function () {
//     console.log(`Hi, my name is ${this.name}`);
//     const that = this;
//     function inner() {
//       console.log(that);
//     }
//     inner();
//   },
// };

// const myFunc = function () {
//   console.log(this);
//   console.log(`My name is ${this.name}`);
// };

// const myFuncObj = {
//   name: "no name",
//   age: 999,
// };
// console.log(this === window);
// myFunc.call(this);
// const rasaq = { name: "rasaq" };
// john.sayHi();

// john.sayHi.call(rasaq);

class Printer {
  showMessage = () => {
    console.log(this);
    console.log("this works");
  };

  protoMethod() {
    console.log(this);
  }

  salary = 78888;
}
