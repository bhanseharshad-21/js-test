try {
    const pi = 3.14
    pi = 13.5
} catch (error) {
    console.log(error.name + " " + error.message);
    
}finally{
    console.log("Code executed completely.");
    
}