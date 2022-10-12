import Menu from './menu'
import { TextInput, Button,Group } from '@mantine/core';
import { useForm } from '@mantine/form';



export function BMI ()  {

    

    const form = useForm({
        initialValues: {
            weight: '',
            height: '',
            // low_weight: '',
            // normal_weight: '',
            // overweight: '',
            // obesity: '',
            datos:'',
        },
        validate: {
            // aquiva una validacion con expresiones regulares
        }
    })
    
  return (
    <div>
    <Menu>
        <form onSubmit={form.onSubmit((values) => form.values.datos = parseFloat(values.weight) / parseFloat(values.height*values.height))}>
        
        <TextInput
      placeholder="Enter your Weight"
      label="Weight/Peso (KG)"
      required
      {...form.getInputProps('weight')}
    />
    <br/>
    <TextInput
      placeholder="Enter your Height"
      label="Height/Altura (metros)"
      required
      {...form.getInputProps('height')}
    />
    
    <br/>
     
    <Group position="center" mt="md">
          <Button type="submit">Calcular</Button>
        </Group>
        <h1>{form.values.datos}</h1>
        {/* <h2>{form.values.weight.length <= 18.5}</h2> */}
        {(() => {
            var content = form.values.datos;
            if(content < 18.5){
                return (content ? "Bajo Peso" : "No Hay datos Disponibles")
            } else if (content >= 18.5 && content <= 24.9){
                return <h3>Peso Saludable</h3>
            } else if(content >= 25 && content <= 29.9){
                return <h4>Sobrepeso</h4>
            } else if(content >= 30){
                return <h5>Obesidad</h5>
            }
        }
        )()}
        {(() => {
        //    var contenido = form.geb;
        //    if(contenido){
        //     return 'hola'
        //    }
        }
        )()}
    </form>
    </Menu>
    </div>
  )
}

export default BMI