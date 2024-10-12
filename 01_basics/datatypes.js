let num = 123
console.log(num)
console.log(typeof(num))

let name = "jaydeep vasan"
console.log([name, typeof(name)])

let isfollow = true
console.log([isfollow, typeof(isfollow)])

const stud = {
 name : "kishan",
 age : 21,
 cgpa : 8.00,
 ispass : true
}
console.log(stud)

//age increase
stud["age"]=stud["age"]+1
console.log(stud)

//pactice
const profile={
    user:"king",
    follower:500+"k",
    isfollow:true,
    post:200
}
console.table(profile)
console.log(profile.user)
console.log(profile.follower)
console.log(profile.isfollow)
console.log(profile.post)