import {View, Text} from 'react-native';

import Blocks from './Blocks';
import Keypad from './Keypad';

getWord = async () => {
    // TODO
}

const Game = () => {
    const [wordleWord, setWordleWord] = useState("IRATE");
    const [guesses, setGuesses] = useState([]);
    const [currentRow, setCurrentRow] = useState(0);
    const [currentColumn, setCurrentColumn] = useState(0);
    return (
        <View>
            <Blocks guesses={guesses} currentRow={currentRow} currentColumn={currentColumn}/>
            <Keypad />
        </View>
    );
}

export default Game;