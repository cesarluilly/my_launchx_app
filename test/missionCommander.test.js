//  //Prueba basica de Jest.
 //Como recomendacion.
 //Primero necesitamos hacer un prueba sencilla donde la prueba no pase
// describe("Esto es una suite de pruebas", () => {
//     test("Caso de prueba 1", () => {
//         const result = 1 + 2
//         expect(result).toBe(10);
//     })
// })


const MissionCommander = require("./../app/missionCommander");
describe("Unit Tests for Mission Commander Class", () => {
    test("1.- Create a mission commander objet", () => {
        const myMissionCommander = new MissionCommander("Woopa");
        expect(myMissionCommander.name).toBe("Woopa");
    })
})




