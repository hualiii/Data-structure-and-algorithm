// 仍需覆盖的州
let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])
// 电台列表
const stations = {}
stations["k_one"] = new Set(["id", "nv", "ut"])
stations["k_two"] = new Set(["wa", "id", "mt"])
stations["k_three"] = new Set(["or", "nv", "ca"])
stations["k_four"] = new Set(["nv", "ut"])
stations["k_five"] = new Set(["ca", "az"])
// 最终选定的电台
const finalStations = new Set()
// do
while (statesNeeded.size) {
    let bestStations = null
    let statesCovered = new Set()
    // 本次循环找出剩余最优电台
    for (const key in stations) {
        const states = stations[key]
        const covered = new Set([...statesNeeded].filter(x => states.has(x)))
        if (covered.size > statesCovered.size) {
            bestStations = key
            statesCovered = covered
        }
    }
    // 所需州列表去除已经选择电台包含的州
    statesNeeded = new Set([...statesNeeded].filter(x => !statesCovered.has(x)))
    finalStations.add(bestStations)
}

console.log(finalStations)