import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddExpenseScreen = ({ navigation }) => {
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleAddExpense = async () => {
        try {
            const response = await fetch('http://localhost:3000/expenses/add-expense', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: date,
                    amount: parseFloat(amount), // amount'ı float'a çevirin, varsayılan olarak 0.00
                    description: description,
                    category: category,
                }),
            });
            if (!response.ok) {
                throw new Error('Ağ yanıtı uygun değil');
            }
            // Yeni harcama eklendikten sonra harcamaları yenileyin
            navigation.navigate('Dashboard'); // Ekranı kapatın veya istediğiniz yöne yönlendirin
        } catch (error) {
            console.error('Hata harcama ekleme:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Yeni Harcama Ekle</Text>
            <TextInput
                style={styles.input}
                placeholder="Tarih (YYYY-MM-DD)"
                value={date}
                onChangeText={setDate}
            />
            <TextInput
                style={styles.input}
                placeholder="Miktar"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Açıklama"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Kategori"
                value={category}
                onChangeText={setCategory}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddExpense}>
                <Text style={styles.buttonText}>Harcama Ekle</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    addButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default AddExpenseScreen;
