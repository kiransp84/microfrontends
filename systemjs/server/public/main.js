// need to change it to System.register format 
System.register(['vue'], () => {
    let Vue;
    return {
        setters: [
            v => Vue = v.default
        ],
        execute() {
            new Vue({
                e1:"#container",
                data : {
                    age : '4000 billion years'
                }
            });
        }
    }
});

console.clear();



