import './User.css'
import React, { Component } from 'react'
import ActionCreators from '../../../redux/actionCreators'
import { connect } from 'react-redux'
import Breadcrumb from '../../../component/templates/Breadcrumb'
import BreadcrumbItem from '../../../component/templates/BreadcrumbItem'
import PageHeaderTitle from '../../../component/templates/PageHeaderTitle'
import Row from '../../../component/layout/row'
import Grid from '../../../component/layout/layoutGrid'
import Box from '../../../component/templates/Box'
import BoxHeader from '../../../component/templates/BoxHeader'
import BoxBody from '../../../component/templates/BoxBody'
import ButtonGroup from '../../../component/buttons/ButtonGroup'
import ButtonGroupLink from '../../../component/buttons/ButtonGroupLink'
import ButtonGroupButton from '../../../component/buttons/ButtonGroupButton'
import LabelAndInput from '../../../component/form/labelAndInput'
import LabelAndSelect from '../../../component/form/labelAndSelect'
import Toast from '../../../component/notifications/Toast'

class Create extends Component {
    state = {
        name: '',
        email: '',
        username: '',
        password: '',
        password_confirmation: '',
        role: ''
    }
    componentDidMount(){
        this.props.reset()
    }
    handleChange = fieldname => event => {
        this.setState({
            [fieldname]: event.target.value
         })
    }
    handleSave = () => {
        this.props.save({
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            role: this.state.role
        })
    }
    render() {	
        const selectRoles  = [{'id':'admin', 'value':'Administrador'}, {'id':'moderator', 'value':'Moderador'}, {'id':'user', 'value':'Usuário'}];	
        return(
            <div className="content-wrapper"><Toast/>
                <section className="content-header">
                    <PageHeaderTitle>
                      Usuário
                      <small>Novo cadastro</small>
                    </PageHeaderTitle>
                    <Breadcrumb>
                        <BreadcrumbItem path='/' icon='fa fa-home' label='Home' />
                        <BreadcrumbItem active='active' label='Usuário | Novo' />
                    </Breadcrumb>
                </section>

                <section className="content">
                    <Row>
                        <Grid cols='12 12'>
                            <Box>
                                <BoxHeader>
                                    <ButtonGroup>
                                        <ButtonGroupLink link='/home' label='Voltar' btnclass='bg-aqua' icon='fa fa-chevron-circle-left'/>
                                        <ButtonGroupButton label='Salvar' btncolor='bg-gray' icon='fa fa-plus-circle' click={this.handleSave}/>
                                    </ButtonGroup>
                                </BoxHeader>
                                <BoxBody></BoxBody>
                            </Box>
                        </Grid>
                    </Row>
                    <Row>
                        <Grid cols='12 12'>
                            <Box>
                                <form>
                                    <div className="box-body">
                                        <Row>
                                            <LabelAndInput onchange={this.handleChange('name')} value={this.state.name} type='text' name='name' component={LabelAndInput} label='Informe o nome' cols='12 6' placeholder='Informe o nome' readOnly={false} />
                                            <LabelAndInput onchange={this.handleChange('email')} value={this.state.email} type='email' name='email' component={LabelAndInput} label='Informe o email' cols='12 6' placeholder='Informe o email' readOnly={false} />
                                        </Row>
                                        <Row>
                                            <LabelAndInput onchange={this.handleChange('username')} value={this.state.username} type='text' name='username' component={LabelAndInput} label='Informe o usuário' cols='12 4' placeholder='Informe o usuário' readOnly={false} />
                                            <LabelAndInput onchange={this.handleChange('password')} value={this.state.password} type='password' name='password' component={LabelAndInput} label='Informe a senha' cols='12 4' placeholder='Informe a senha' readOnly={false} />
                                            <LabelAndInput onchange={this.handleChange('password_confirmation')} value={this.state.password_confirmation} type='password' name='password_confirmation' component={LabelAndInput} label='Confirme a senha' cols='12 4' placeholder='Confirme a senha' readOnly={false} />
                                        </Row>
                                        <Row>
                                            <LabelAndSelect onchange={this.handleChange('role')} value={this.state.role} name='role' pupolate={selectRoles} component={LabelAndSelect} label='Perfil do usuário' cols='12 4' readOnly={false} option='value'/>
                                        </Row>
                                    </div>
                                </form>
                            </Box>
                        </Grid>
                    </Row>
                </section>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth,
        user: state.user
    }
}
const mapDispatchToProps = dispatch=> {
    return {
        save: (user) => {
            dispatch(ActionCreators.createUserRequest(user))
        },
        reset: () => {
            dispatch(ActionCreators.createUserReset())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Create)
