

function arrange(str) {
  const task = [];

  task.push(()=>{
     console.log(`${str} is notified`);
  });

  function dos(s) {
     task.push(()=>{
        console.log(`Start to ${s}`);
     })
     return this;
  }

  function wait(n) {
    task.push(()=>{
        return new Promise(res => {
            setTimeout(()=>{
                console.log(`等待了 ${n} 秒`);
                res();
            },n * 1000);
        })
    });
    return this;
  }

  async function excute () {
    for(let fun of task) {
        await fun();
    }
  }

  return {
    do:dos,
    excute,
    wait
  }
}


arrange("chiko").wait(3).do("hello").wait(5).do("我不是药神").excute();


class Arrange {
    task = [];
    constructor(str) {
        this.task.push(()=>{
            console.log(`${str} is notified`);
        })
    }

    do (s) {
       this.task.push(()=>{
          console.log(`Start to ${s}`);
       })
       return this;
    }

    wait(n) {
        this.task.push(()=>{
            return new Promise(res => {
                setTimeout(()=>{
                    console.log(`等待了 ${n} 秒`);
                    res();
                },n * 1000);
            })
        });
        return this;
    }

    async excute () {
        for(let fun of this.task) {
            await fun();
        }
    }
}

new Arrange("chiko").wait(3).do("hello").wait(5).do("我不是药神").excute();