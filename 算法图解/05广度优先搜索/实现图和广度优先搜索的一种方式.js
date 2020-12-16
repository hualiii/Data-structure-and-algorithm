const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

// 判断是否是寻找目标
function isTarget(name) {
    return name[name.length - 1] === 'm'
}

// 广度优先搜索
function search(name) {
    let searchArr = [].concat(graph[name])
    let searchedArr = []
    while (searchArr.length) {
        const person = searchArr.shift()
        if (searchArr.indexOf(person) === -1) {
            if (isTarget(person)) {
                console.log('target is ' + person)
                return true
            } else {
                searchedArr.push(person)
                searchArr = searchArr.concat(graph[person])
            }
        }
    }
    return false
}

search('you')