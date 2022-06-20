import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		inputTexto:"",
	}

	onChangeComentario = (event) => {
		console.log (event.target.value)
		this.setState({
			inputTexto: event.target.value
		})

	}

	adcionaComentario = (event) => {
		const novoComentario = this.state.inputTexto
		const novoComentarios = [novoComentario, this.state.inputTexto]
		this.setState({inputTexto: novoComentarios})
	}

	render() {
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.inputTexto}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}
