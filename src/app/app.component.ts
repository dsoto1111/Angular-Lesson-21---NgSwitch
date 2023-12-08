import { Component, QueryList, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
//import { Character } from './character.model';

interface funcTest {
    (arg: number): number;
}

interface Character extends Strengths {
    name: string;
    age: number;
    archetype: string;
}

interface Strengths {
    strengths?: string[];
}

interface locationPlace {
    [key: string]: string;
}

interface indexSigArray {
    [index: number]: string;
}

const places: locationPlace = {
    'location1': 'Colombia',
    'location2': 'Japan'
}

const isa: indexSigArray = ['one', 'two', 'three'];

class AnotherCharacter implements Character {
    name: string = 'Tito';
    age: number = 52;
    archetype: string = 'bard';

    hello(): string {
        return 'there';
    }
}

interface genericFunction<T, U> {
    (arg1: T, arg2: U): void;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
    people: Character[] = [{ name: 'Tutu', age: 30, archetype: 'shaman', strengths: ['Medicine', 'Counseling', 'Spell Casting']}, { name: 'Jimmy', age: 32, archetype: 'scout', strengths: ['Assassin', 'Outlaw', 'Subtlety']}];
    //people: Character[] = [new Character('Tutu', 30, 'shaman', ['Medicine', 'Counseling', 'Spell Casting']), new Character('Jimmy', 32, 'scout', ['Assassin', 'Outlaw', 'Subtlety'])];

    @ViewChildren('element') element!: QueryList<ElementRef>;

    testingFunction: funcTest = function(arg: number): number {
        console.log(arg);
        return arg;
    }

    Singer: AnotherCharacter = new AnotherCharacter();

    genFunc1<T, U>(parameter1: T, parameter2: U): void {
        console.log('parameter1 is ' + parameter1 + ', parameter2 is ' + parameter2);
    }

    stringNumGeneric: genericFunction<string, number> = this.genFunc1;

    switchValue: string = '';

    ngAfterViewInit(): void {
        let instance: number;

        this.element.forEach(elmn => console.log(elmn.nativeElement));

        this.element.changes.subscribe(item => {
            setTimeout(() => {
                this.people.sort((a, b) => a.age - b.age);
            }, 0);
            console.log(item);
        })
        this.testingFunction(100);
        console.log(this.Singer.name);
        console.log(this.Singer.hello());
        console.log(places['location1']);
        console.log(isa[2]);
        this.stringNumGeneric('param', 2);
        this.genFunc1(true, '{one: 1}');

        let i = 0;
        instance = window.setInterval(() => {
            this.switchValue = isa[i];
            i++;
            if (i === 3) {
                clearInterval(instance);
            }
        }, 3000);
    }

    changeName() {
        this.people[1].name = 'George';
    }

    changeAge() {
        this.people[1].age = 22;
    }

    trackFunction(index: number, character: Character): number {
        return character.age;
    }
}
