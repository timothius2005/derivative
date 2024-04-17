g.addV('equipment')
    .property('partitionKey','1236')
    .property('name', 'Barbell')
    .next()

//this works!!!!
g.V("B").addE('before').to(g.V('C'))
// don't touch it

g.addE(label).from(source).to(target)

g.addV('exercise')
    .property('partitionKey','7777')
    .property('name', 'Chest Press')
        .property('measured', "reps")
        .property("primary muscle","Chest")
        .next()
      

g.V("B").addE('before').to(g.V('C')).addE('next').to(g.v("A")).addE('next').to(g.v("A"))
g.V("14bcb983-ed45-41f7-a133-9fbad722546f").addE("uses").to(g.V("6dc90d90-b979-4ea2-a855-f470e458cd11"))
g.V("14bcb983-ed45-41f7-a133-9fbad722546f").addE("uses").to(g.v("1019dd7d-7136-4868-a767-721c052b678c"))
g.addE("uses").from("14bcb983-ed45-41f7-a133-9fbad722546f").to("757d7397-a93f-4017-acbf-b6194f1ecdd5")

g.addV('240208test').property(id,'A').as('a').property('partitionKey','7777')
           addV('240208test').property(id,'B').as('b').property('partitionKey','7777')
           addV('240208test').property(id,'C').as('c').property('partitionKey','7777')
           addV().property(id,'D').as('d').property('partitionKey','7777')
           addV().property(id,'E').as('e').property('partitionKey','7777')
           addV().property(id,'F').as('f').property('partitionKey','7777')
           addE('next').from('a').to('b').property('partitionKey','7777')
           addE('next').from('b').to('c').
           addE('next').from('b').to('d').
           addE('next').from('c').to('e').
           addE('next').from('d').to('e').
           addE('next').from('e').to('f')

g.V(['a', 'A']).addE('next').to(g.V(['b', 'B']))