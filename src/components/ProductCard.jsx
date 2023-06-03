import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';

const ProductCard = ({navigation, name, price, img}) => {
  return (
    <TouchableOpacity
      style={styles.ProductItem}
      onPress={() => navigation.navigate('SingleProduct',{name,price,img})}>
      <Image
        source={{uri: 'https://www.nicepng.com/png/detail/15-154351_watches-png-image-watch-png-for-picsart.png'}}
        style={{
          width: '100%',
          height: '70%',
          backgroundColor: '#F4F6F8',
          borderRadius: 16,
        }}
      />
      <View style={styles.favIconFill}>
        <Image
          source={require('../constant/images/favfill.png')}
          style={styles.favIconFillImage}
        />
      </View>
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>{price}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  ProductItem: {
    height: 200,
    width: '47%',
    marginHorizontal: 5,
    marginBottom: 2,
  },
  productName: {
    color: '#FFBB0E',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  productPrice: {
    fontFamily: 'Poppins-SemiBold',
    color: '#828282',
    fontSize: 12,
  },

  favIconFill: {
    position: 'absolute',
    top: 12,
    right: 10,
  },
  favIconFillImage: {
    height: 20,
    width: 20,
  },
});
