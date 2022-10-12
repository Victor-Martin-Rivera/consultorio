import { Input, Stack, Box, Divider, Paper, Table, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { useState } from 'react';
import FoodDataDescription from '../components/FoodDescription';
import { localStorage } from '../class/localstorage';
import Menu from './menu';
const BusquedaAlimentos = () => {
    const getDataTable = async () => {
        let json = localStorage.getItem('foodTable')
        if (localStorage.getItem('fodTable') === undefined) {
            const url = 'https://smaedb-b59df-default-rtdb.firebaseio.com/SMAE.json'
            const res = await fetch(url)
            json = await res.json()
            localStorage.setItem('foodTable', json)
        }
        localStorage.setItem('foodTable', json)
    }
    getDataTable()
    const data = localStorage.getItem('foodTable')
    const [name, setName] = useState('')
    const [food, setFood] = useState(Object)
    const [listFoods, setListFoods] = useState([])
    const [openedFoodDataModal, setOpenedFoodDataModal] = useState(false)

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
            if (name.trim().length > 0) {
                setListFoods(getFoodsData())
            }
        }
    }
    const getFoodsData = () => data.filter((e: any) => e.Alimento.toLowerCase().includes(name.toLowerCase()))

    const showData = (e: any) => {
        setOpenedFoodDataModal(!openedFoodDataModal)
        setFood(e)
    }

    return (
        <Menu>
        <Stack>
            <Input
                sx={{ minWidth: 600 }} mx="auto"
                icon={<IconSearch />}
                placeholder="Nombre de alimento"
                radius="md"
                value={name}
                onChange={(e: any) => setName(e.currentTarget.value)}
                onKeyPress={keyDownHandler}
            />
            <Divider />
            <Box sx={{ minWidth: 600 }} mx="auto" >
                <Paper radius="md" p="lg" withBorder >
                    <Table>
                        <thead>
                            <tr>
                                <th>Alimento</th>
                                <th>Ver detalles</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listFoods.map((e: any) => (
                                <tr key={e.Alimento}>
                                    <td>{e.Alimento}</td>
                                    <td><Button onClick={() => showData(e)}>Ver más</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <FoodDataDescription opened={openedFoodDataModal} setOpened={setOpenedFoodDataModal} food={food} />
                </Paper>
            </Box>
        </Stack>
        </Menu>
    )
}

export default BusquedaAlimentos