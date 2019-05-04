import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native'

export default class Main extends Component {
    render() {
        return (

            <View style={styles.container}>
                <TextInput
                    style={styles.searchBar}
                    placeholderTextColor="#fff"
                    selectionColor="#fff"
                    placeholder='Pesquisar Produtos / Atacados, Lojistas...' />

                <View style={styles.top}>

                    <TouchableOpacity style={styles.circle}>
                        <View style={styles.circle}>
                            <Text style={{ color: '#fff', alignSelf: 'center' }}>Vestuário</Text>
                            <Image source={require('./vestuario.jpg')} style={styles.circle}></Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.circle}>
                        <View style={styles.circle}>
                            <Text style={{ color: '#fff', alignSelf: 'center' }}>Alimentos</Text>
                            <Image source={require('./alimentos.jpg')} style={styles.circle}></Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.circle}>
                        <View style={styles.circle}>
                            <Text style={{ color: '#fff', alignSelf: 'center' }}>Peças</Text>
                            <Image source={require('./peças.jpg')} style={styles.circle}></Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.circle}>
                        <View style={styles.circle}>
                            <Text style={{ color: '#fff', alignSelf: 'center' }}>Pesca</Text>
                            <Image source={require('./pesca.jpg')} style={styles.circle}></Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.circle}>
                        <View style={styles.circle}>
                            <Text style={{ color: '#fff', alignSelf: 'center' }}>Utilidades</Text>
                            <Image source={require('./utilidades.jpg')} style={styles.circle}></Image>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.market}>
                    <TouchableOpacity style={{ color: 'rgba(0,0,0, .2)' }}>
                        <View style={styles.market1}>
                            <Image source={require('./stop.jpg')} style={styles.image1}></Image>
                            <Text style={{ color: '#fff', fontSize: 18, marginLeft: '4%' }}>Canhoto Atacado - Alimentos</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.market2}>
                            <Image source={require('./pesca.jpg')} style={styles.image1}></Image>
                            <Text style={{ color: '#fff', fontSize: 18, marginLeft: '4%' }}>Marujo Atacado e Varejo - Pesca</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.market3}>

                    </View>

                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    searchBar: {
        width: '94%',
        backgroundColor: 'rgba(0,0,8, .9)',
        borderRadius: 45,
        paddingHorizontal: 4,
        opacity: 0.4,
        textAlign: 'justify',
        padding: 6,
        color: '#fff',
        marginTop: '2%',
        marginLeft: '2%'
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#27343e',
    },
    top: {
        height: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        margin: '3%',
        marginTop: '1%'
    },
    circle: {
        width: 65,
        height: 65,
        borderRadius: 100,
        marginTop: '3%'
    },
    header: {
        width: '30%',
        height: '30%',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 1,
    },
    market: {
        margin: '4%',
    },
    image1: {
        width: 100,
        height: 100
    },
    market1: {
        flexDirection: 'row'
    },
    market2: {
        marginTop: '5%',
        flexDirection: 'row'
    }

})
