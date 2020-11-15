import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Layout from "../components/bluetoothListLayout";
import Empty from "../components/empty";
import Toggle from "../components/toggle";
import Subtitle from "../components/subtitle";
import Device from "../components/device";
import BluetoothSerial from "react-native-bluetooth-serial-next";
function BluetoothList(props) {
  const [lista, setLista] = useState([]);
  const [bolEnable, setBolEnable] = useState(false);
  useEffect(() => {
    async function init() {
      const enable = await BluetoothSerial.requestEnable();
      const lista = await BluetoothSerial.list();
      setLista(lista);
      setBolEnable(enable);
      console.log(lista);
    }
    init();
    return () => {
      async function remove() {
        await BluetoothSerial.stopScanning();
        console.log("Fim scaner");
      }
      remove();
    };
  }, []);
  const renderEmpty = () => <Empty text="Sem elemento" />;
  const renderItem = ({ item }) => {
    return (
      <Device
        {...item}
        iconLeft={require("../../icons/laptop.png")}
        iconRight={require("../../icons/config.png")}
      />
    );
  };
  const enableBluetooth = async () => {
    try {
      await BluetoothSerial.requestEnable();
      const lista = await BluetoothSerial.list();
      await BluetoothSerial.stopScanning();
      setBolEnable(true);
      setLista(lista);
    } catch (error) {
      console.log(error.massege);
    }
  };
  const disableBluetooth = async () => {
    try {
      await BluetoothSerial.disable();
      await BluetoothSerial.stopScanning();
      setBolEnable(false);
      setLista([]);
    } catch (error) {
      console.log(error.massege);
    }
  };
  const toggleBluetooth = (value) => {
    if (value) {
      return enableBluetooth();
    }
    disableBluetooth();
  };
  return (
    <Layout title="Bluetooth">
      <Toggle value={bolEnable} onValueChange={toggleBluetooth} />
      <Subtitle title="Lista de dispositivos" />
      <FlatList
        data={lista}
        ListEmptyComponent={renderEmpty()}
        renderItem={renderItem}
      />
    </Layout>
  );
}
export default BluetoothList;
