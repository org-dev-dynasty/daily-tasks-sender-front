
import React, { useState } from 'react';
import { Modal, View, TextInput, TouchableOpacity, Text, ScrollView, Button } from 'react-native';
import {
    ModalContainer,
    ModalContent,
    Title,
    Subtitle,
    TextInputStyled,
    ColorsContainer,
    ColorCircle,
    CustomColorText,
    ConfirmButton,
    ConfirmButtonText,
    CloseButton,
    CloseButtonText,
    ColorTitle
} from './styles';
import { Background } from '../background';
import { Palette, XCircle } from 'phosphor-react-native';
import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider, Panel3 } from 'reanimated-color-picker';

const categoriesColors = [
    '#FF9494', '#F4966E', '#FFE7A0', '#A4F4C7', '#9CD4F3',
    '#B97CF6', '#F684F2', '#DB6060', '#F98250', '#F2D06A',
    '#52C283', '#5275B7', '#914ED5', '#D55BD0', '#B94646',
    '#D9610A', '#F6C533', '#359860', '#2C357F', '#6420A8',
    '#AA25A4'
];

export default function CategoryModal({ visible, onClose, onConfirm }: any) {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [categoryName, setCategoryName] = useState('');
    const [showColorPickerModal, setShowColorPickerModal] = useState(false);

    const onSelectColor = ({ hex }: any) => {
      console.log(hex);
    };

    return (
        <>
            <Modal
                transparent
                visible={visible}
                animationType="slide"
                onRequestClose={onClose}
            >
                <ModalContainer>
                    <ModalContent>
                        <CloseButton onPress={onClose}>
                            {/* <CloseButtonText>X</CloseButtonText> */}
                            <XCircle size={32} color='#F06B41' />
                        </CloseButton>
                        <Title>Criar Categoria</Title>
                        <Subtitle>Crie uma nova categoria para as suas tasks</Subtitle>
                        <TextInputStyled
                            placeholder="Nome da Categoria"
                            placeholderTextColor="#fff"
                            value={categoryName}
                            onChangeText={setCategoryName}
                        />
                        <ScrollView>
                            <ColorTitle>Selecione uma cor</ColorTitle>
                            <ColorsContainer>
                                {categoriesColors.map(color => (
                                    <ColorCircle
                                        key={color}
                                        color={color}
                                        selected={selectedColor === color}
                                        onPress={() => setSelectedColor(color)}
                                    />
                                ))}
                            </ColorsContainer>
                        </ScrollView>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CustomColorText>Ou, escolha a sua cor</CustomColorText>
                            <TouchableOpacity style={{ marginLeft: 8 }} onPress={() => setShowColorPickerModal(true)}>
                                <Palette size={32} color='#F06B41' />
                            </TouchableOpacity>
                        </View>
                        <ConfirmButton onPress={() => onConfirm(categoryName, selectedColor)}>
                            <ConfirmButtonText>Confirmar</ConfirmButtonText>
                        </ConfirmButton>
                    </ModalContent>
                </ModalContainer>
            </Modal >
            <Modal transparent visible={showColorPickerModal} animationType='slide'>
                <ColorPicker style={{ width: '70%' }} value='red' onComplete={onSelectColor}>
                    <Preview />
                    <Panel3 />
                    <OpacitySlider />
                </ColorPicker>

                <TouchableOpacity onPress={() => setShowColorPickerModal(false)}><Text>OK</Text></TouchableOpacity>
            </Modal>
        </>
    );
};
