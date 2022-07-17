import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Connexion from './components/Connexion';
import Search from './components/Search';

const Tab = createBottomTabNavigator();

export default function App() {

    return(
    
        <Tab.Navigator>
            <Tab.Screen name={"Connexion"} component={Connexion}  options={{
                    tabBarIcon: () => {<AntDesign name="fsearch" size={24} color="black" />}, }} />
            <Tab.Screen name={"Search"} component={Search} />
        </Tab.Navigator>
    
);
}