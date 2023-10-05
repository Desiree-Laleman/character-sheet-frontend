import "./CharacterForm.css";

const CharacterForm = () => {
  return (
    <form className="CharacterForm">
      <input type="text" placeholder="Character Name" />
      <select name="race" id="race">
        <option value="dragonborn">Dragonborn</option>
        <option value="dwarf">Dwarf</option>
        <option value="elf">Elf</option>
      </select>
      <select name="character-class" id="character-class">
        <option value="barbarian">Barbarian</option>
        <option value="bard">Bard</option>
        <option value="cleric">Cleric</option>
      </select>
      <input type="number" placeholder="level" />
      <select name="character-background" id="character-background">
        <option value="acolyte">Acolyte</option>
        <option value="Anthropologist">Anthropologist</option>
        <option value="Archaeologist">Archaeologist</option>
      </select>
      <select name="alignment" id="alignment">
        <option value="lawful">Lawful</option>
        <option value="neutral">Neutral</option>
        <option value="evil">Evil</option>
      </select>
      <input type="number" placeholder="armor class" />
      <input type="number" placeholder="hit points" />
      <input type="number" placeholder="initiative" />
      <input type="number" placeholder="insporation" />
      <input type="number" placeholder="speed (in feet)" />

      <input type="number" placeholder="strength" />
      <input type="number" placeholder="dexterity" />
      <input type="number" placeholder="constitution" />
      <input type="number" placeholder="intelligince" />
      <input type="number" placeholder="wisdom" />
      <input type="number" placeholder="charisma" />
    </form>
  );
};

export default CharacterForm;
