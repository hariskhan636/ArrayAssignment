import * as React from 'react';
import { View, Text,Button,ScrollView,StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';



const Stack = createNativeStackNavigator();
var prod = ['Far Cry 3','Hitman 4','Mad Max','Witcher','GTA 5']
var emp = ['Adeel','Haris','Wasiq','Hasnain','Moonis']

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
            headerTitleAlign:'center',
            headerStyle: {
              backgroundColor: '#C00700',
            },
            headerTitleStyle:{
              alignItems:'center',
              fontWeight:'bold',
              justifyContent:'center',
            },
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerLeft:()=>null}} />
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="EmployeesList" component={EmployeesList} />
          <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />
          <Stack.Screen name="OrdersList" component={OrdersList} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  function Login({navigation}){
    return(
      <View style ={[styles.container]}>
        <View>
          <Text style={[styles.text,{textAlign:'left'}]}>User Name:</Text>
        </View>
        <View>
          <Input  placeholder=''  leftIcon={{ type: 'font-awesome', name: 'user', color:'white' }}/>
        </View>
        <View>
          <Text style={[styles.text,{textAlign:'left'}]}>Password:</Text>
        </View>
        <View>
          <Input  placeholder=''  leftIcon={{ type: 'font-awesome', name: 'lock', color:'white' }}/>
        </View>
          <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomeScreen')}
        >
          <Text style={[styles.text,{alignItems:'center'}]}>Login</Text>  
        </TouchableOpacity>
      </View>
    )
  }
  
  function HomeScreen({navigation}) {
  return (
    <View style={[styles.container,{alignItems:'center'}]}>
      <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('ProductList')}
      >
        <Text style={styles.text}>Product List</Text>  
      </TouchableOpacity>

       <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('EmployeesList')}
      >
        <Text style={styles.text}>Employees List</Text>  
      </TouchableOpacity>

       <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('OrdersList')}
      >
        <Text style={styles.text}>Orders List</Text>  
      </TouchableOpacity>
    </View>
  );
}

function ProductList() {
  return (
    <View style={[styles.container,{alignItems:'center'}]}>
      <ScrollView>
      {prod.map((item)=>
      <View>
        <Text style={styles.text}>{item}</Text>
      </View>
      )}
      </ScrollView>
    </View>
  );
}
function ProductDetails() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
function EmployeesList() {
  return (
    <View style={[styles.container,{alignItems:'center'}]}>
      <ScrollView>
      {emp.map((item)=>
      <View>
        <Text style={styles.text}>{item}</Text>
      </View>
      )}
      </ScrollView>
    </View>
  );
}
function EmployeeDetails() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
function OrdersList() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Order List</Text>
    </View>
  );
}
function OrderDetails() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
}

export default App;

const styles = StyleSheet.create({

  container:{
    backgroundColor:'black', 
    flex: 1,
    justifyContent:'flex-start' 
    //alignItems: 'center', 
  },

  button:{
    backgroundColor:'#C00700',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20,
    padding:10,
    borderRadius:20,
    marginTop:10
  },
  text:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
  }
})