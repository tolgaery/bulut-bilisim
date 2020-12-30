import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class NewsItem extends Component {
  render() {
    const colors = {
      'Spor': 'green',
      'magazin': 'greenyellow',
      'TV': 'blue',
      'tarih': 'yellow',
      'sanat': 'red'
    }
    return (
      <View style={{ backgroundColor: colors[this.props.type] }}>
        <Text>{this.props.title}</Text>
        <Text>{this.props.description}</Text>
        <Text>{this.props.type}</Text>
      </View>
    )
  }
}

class App extends Component {
  render() {
    return(
      <ScrollView>
        <NewsItem title="fenerbahcenin kutlamaları" description="fenerbahçe bu yıl 100. yılını kutladı." type="Spor" />
        <NewsItem title="Şampiyonluk.." description="01.01.2020" type="Spor" />
        <NewsItem title="Sonunda!" description="Kazanıldı.." type="Spor" />

        <NewsItem title="Galatasarayın Kutlamaları" description="Istenilen oldu.." type="Magazin" />
        <NewsItem title="Şampiyonluk.." description="01.01.1990" type="Magazin" />
        <NewsItem title="Sonunda!" description="KAZANDIK!" type="Magazin" />

        <NewsItem title="Acun Ilıcalı" description="Exxen ile yeni bir hayat" type="TV" />
        <NewsItem title="Şeyma Subaşı" description="Acun'a Nispet" type="TV" />
        <NewsItem title="Neşet Ertaş" description="Özümüz.." type="TV" />

        <NewsItem title="Tarih Bulundu" description="Yapılan kazı çalışmaları sonuç verdi!" type="tarih" />
        <NewsItem title="Kazı" description="Kazıdan 4 ton altın çıkarıldı!" type="tarih" />
        <NewsItem title="Türkiye" description="Türkiye, önemli anlaşmaya imza attı!" type="tarih" />

        <NewsItem title="Değer Gördük." description="Sonunda ünlü ressamımız hibe alabildi!" type="sanat" />
        <NewsItem title="Dünyada Eşi Benzeri yok!" description="Yapılan tablo sıradışıydı.." type="sanat" />
        <NewsItem title="Örnek oldu." description="Yeni bir resim tekniğiyle, örnek oldu!" type="sanat" />
      </ScrollView>
    )
  }
}

export default App;