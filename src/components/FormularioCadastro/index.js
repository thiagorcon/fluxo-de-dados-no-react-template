



export const FormularioCadastro = () => {
    return(
        <div>
            <h2>Insira sua postagem abaixo: </h2>
            <form>
                <label htmlFor="nome">Nome: </label>
                <input id="nome"/>

                <label htmlFor="foto">Foto: </label>
                <input id="foto"/>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}