import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { useFocusEffect } from '@react-navigation/native';

const DashboardScreen = ({ navigation }) => {
    const [expenses, setExpenses] = useState([]);

    // Fetch expenses from server
    const fetchExpenses = async () => {
        try {
            const response = await fetch('http://localhost:3000/expenses/expenses');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Expenses:', data);
            setExpenses(data);
        } catch (error) {
            console.error('Error fetching expenses:', error);
        }
    };

    // Fetch expenses on initial component mount
    useEffect(() => {
        fetchExpenses();
    }, []);

    // Fetch expenses again when screen gains focus (when navigated back to this screen)
    useFocusEffect(
        React.useCallback(() => {
            fetchExpenses();
        }, [])
    );

    // Define table headers and format data
    const tableHead = ['Date', 'Amount', 'Description'];
    const tableData = expenses.map((expense) => [expense.date, `$${expense.amount}`, expense.description]);

    // Render function for table rows
    const renderTableRows = () => {
        return tableData.map((rowData, index) => (
            <Row
                key={index}
                data={rowData}
                style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oddRow]}
                textStyle={styles.text}
            />
        ));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard Screen</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddExpense')}>
                <Text style={styles.buttonText}>Add Expense</Text>
            </TouchableOpacity>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
                <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
                {renderTableRows()}
            </Table>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    addButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff',
    },
    headText: {
        margin: 6,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    row: {
        height: 40,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    evenRow: {
        backgroundColor: '#f2f2f2',
    },
    oddRow: {
        backgroundColor: '#fff',
    },
    text: {
        margin: 6,
        textAlign: 'center',
    },
});

export default DashboardScreen;
