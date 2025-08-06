const documento = async() => {
    const pedir = await fetch('http://localhost:3000/tipo');
    const data = await pedir.json();
    return data;
}
                           
export default documento;