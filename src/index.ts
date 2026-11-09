import express from 'express'; //para chamar o express no código (?)

const app = express();
const porta = 3000;

const siglaMaiuscula = [
    'AC',	 
    'AL',	 
    'AP',	 
    'AM',	 
    'BA',	 
    'CE',	 
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',	
    'SP',
    'SE',
    'TO'
]

const siglaMaiusculaInicial = [
    'Ac',	 
    'Al',	 
    'Ap',	 
    'Am',	 
    'Ba',	 
    'Ce',	 
    'Df',
    'Es',
    'Go',
    'Ma',
    'Mt',
    'Ms',
    'Mg',
    'Pa',
    'Pb',
    'Pr',
    'Pe',
    'Pi',
    'Rj',
    'Rn',
    'Rs',
    'Ro',
    'Rr',
    'Sc',	
    'Sp',
    'Se',
    'To'
]

const siglaMinusculaInicial = [
    'aC',	 
    'aL',	 
    'aP',	 
    'aM',	 
    'bA',	 
    'cE',	 
    'dF',
    'eS',
    'gO',
    'mA',
    'mT',
    'mS',
    'mG',
    'pA',
    'pB',
    'pR',
    'pE',
    'pI',
    'rJ',
    'rN',
    'rS',
    'rO',
    'rR',
    'sC',	
    'sP',
    'sE',
    'tO'
]

const siglaMinuscula = [
    'ac',	 
    'al',	 
    'ap',	 
    'am',	 
    'ba',	 
    'ce',	 
    'df',
    'es',
    'go',
    'ma',
    'mt',
    'ms',
    'mg',
    'pa',
    'pb',
    'pr',
    'pe',
    'pi',
    'rj',
    'rn',
    'rs',
    'ro',
    'rr',
    'sc',	
    'sp',
    'se',
    'to'
]
const estado =[
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
]
siglaMaiuscula[0] = estado[0]
app.get("/estados/:sigla",(req,res)=>{
    const sigla:string = req.params.sigla;
    if(sigla = siglaMaiuscula[0]){
        res.status(200).json({
            mensagem:"São Paulo"
        })
    } else{
        res.status(404).json({
            mensagem:"erro 404!"
        })
    }
})

app.listen(porta,()=>{
    console.log("Servidor no ar")
    console.log("http://localhost:" + porta)
});

/* estruturas:

app.get("/sobre",(req,res)=>{
    res.status(200).json({
        mensagem:"api sobre cadastro de produtos"
    })
})

app.get("/saudacao/:nome",(req,res)=>{
    const nome=req.params.nome;

    res.json({
        mensagem:`bom dia ${nome}`
    })
})

app.get("/produto/:id",(req,res)=>{
    const id=req.params.id;

    res.json({
        acao:"pesquisa por produto",
        id:id
    });
})

app.post("/produto",(req,res)=>{
    res.json({
        verbo: "POST",
        acao: "Cadastrar Cliente"
    });
})

app.put("/produto",(req,res)=>{
    res.json({
        verbo: "PUT",
        acao: "Substituir o Recurso completamente"
    });
})

app.delete("/produto/:id",(req,res)=>{
    const id = req.params.id

    res.json({
        id:id,
        verbo: "Delete",
        acao: "Deletar o Recurso"
    });
})

    "/ ツ 
Se parecem muito
*/