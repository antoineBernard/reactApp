import React, { Component } from 'react';

var FilteredList = React.createClass({

  getInitialState: function(){
     return {
       initialItems: [ "Camel","Romain","Vincent","Romain","Yohan","Martin","Adrien","Mihail","Joseph","Maxime","Farhdine","Etienne","Ouadie","Océane","Adrien","Stéphane","Simon","Etienne","Sylvain","Nicolas","Florian","Antoine","Alexis","Mathieu","Benoît","Thomas","Nicolas","Marine","Damien","François-Xavier","Adrien","Alexandre","Christopher","Jérémy","Hugo","Louis","Clotilde","Guillaume","Stephen","Arthur","Nicolas","Guillaume","Anaël","Florent","Ngoc Quê-Minh","Julien","Catherine","Valérian","Franck","Jérémy","Vincent","Matthieu","Pédro","Adrien","Emilie","Thomas","Guillaume","Maguette","Max","Julie","Morgan","David","Nicolas","Raymond Médédé","Kevin","Nathalie","Nicolas","Clément","Reda","Romain","Ali","Can","Mathieu","Ricardo","Maxime","Diana","Mohamed","Alexandre","Islam","Thomas","Paulo Roberto","Nicolas","Laurent","Thomas","Glenn","Arthur","Anne-Marie","Cyril","Jordhan","Guillaume","Benoit","Arnaud","Mehdi","Clément","Jérémy","Rémi","Manon","Lucas","Nicolas","Vanessa","Leïla","David","Joël","Ali","Adrien","Laurent","Wassel","Jean-Christophe","Constant","Joy","Mohammed","Christophe","Daniel","Lan","Cédric","Cyril","Bénédicte","Nicole","Alexandre","Mehdi","Victor","Thomas","Samuel","Renaud","Angélique","Mathieu","Jeffrey","Pierre","Alexandre","Mehdi","Edouard","Julie","Youri","Claire","Alexis","Safa","Anne Sophie","Pierre","Sarah","Youssef","Julien","Philippe","Samy","Samuel","Pauline","Nicolas","Basile","Pierre","Antonio","Sébastien","Elise","Mada","Roman","Antoine","Mehdi","Yassir","Alain","Loup","Sandra","François","Adrien","Nelson","Gaëlle","Antoine","Ali-Asghar","Oliver","Hugo","Julien","Céline","Pierre-Alain","Ivan Andres","Franck","Sophie","Steeve","Maria","Benoit","Fabien","Benoît","Eric","Svetlana","Maxime","Nicolas","Anass","Adeline","Mohamed","Benoît","Daniel","Martin","Marc","Laëtitia","Veltin","Sébastien","Olivier","Caroline","Nicolas","Marwane","Thibaut","Xavier","Dorian","Yasir","Pierrette","Adrien","Sophie","Blandine","Vincent","Emmanuel","Julien","Adrien","Sebastian","Frédéric","Julien","Arnaud","Camille","Nicolas","Rémi","Romain","Alain","Nicolas","Marion","Thibault","Yann","Guillaume","Mohamed","Tristan","Tanguy","Frédéric","Benoit","Alexandre","Thibaut","Stéphanie","Antoine","Christian","Carole","Bastien","Eric","Robin","Fabien","Erwan","Aurélien","Landry","Sergey","Thomas","Matthieu","Salim","Benjamin","Michael","Guillaume","Jérémy","Yann","Julien","Florian","El Mostafa","Gabriel","Roxanne","Yassir","Jérémy","Wojciech","Fabien","Dominique","Pierre","Florian","Alban","Christophe","Thomas","Zakaria","Clément","David","Alexandre","Arnaud","Pierrick","Muriel","Augustin","Jérémie","Benjamin","Vassilina","Nicolas","Antoine","François-Xavier","Majida","Eric","Edouard","Samy","Jérémy","Julien","Mohamed","Philippe","Matthias","Laurent","Nabil","William","Mathieu","Antoine","Jean-Damien","Jean-Charles","Marina","Natalie","Siti","Sophie","Maxence","Frédéric","Cédric","Ahmed","Pierre","Pauline","Géraldine","Abel","Miguel Eduardo","Mahdi","Aurélien","Olivier","Philippe","Stéphanie","Bilal","Mickaël","Jeremy","Michel","Yacine","Borémi","Clément","Charlotte","Vitor","Sandrine","Lilian","Cyril","Maria-Dolores","Sylvain","Issame","Florent","Yassine","Benjamin","Antoine","Christophe","Edouard","Cyrille","David","Philippe","Frédéric","Arnaud","Cyril","Jennifer","Vincent","François","Julien","Antoine","Maxence","Alain","Ilker","Laurent","Sabrina","Thomas","Benoit","Jerome","Marc","Arnaud-Francois","Arnaud","Désiré","Dominique","Marc","Nabil","Olivier","Hervé","Eric","Laurent","Damien","Olivier","Eric","William","Ludovic","Sylvain","Meriem","Nelly","Christophe"],
       items: []
     }
  },

  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },

  filterList: function(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },

  render: function() {
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
        <List items={this.state.items}/>
      </div>
    );
  }
})

export default FilteredList;

var List = React.createClass({
  render: function(){
    return (
      <ul>
      {
        this.props.items.map(function(item) {
          return <li key={item}>{item}</li>
        })
       }
      </ul>
    )
  }
});
