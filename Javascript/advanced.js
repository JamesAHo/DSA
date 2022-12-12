// implementation of call() apply() bind();
function a() {
    console.log('hi')
}
a.call()
// implementation game

const wizard = {
    name:'Banana',
    health:50,
    heal() {
        return this.health = 100
    }
}
const archer = {
    name: 'Apple',
    health: 30,
    
}
wizard.heal.call(archer);