Очистить значение в `Input`'е можно только с помощью пустой строки

```jsx harmony
import { Button, Group } from '@entities/button'; (group в разработке)

const [value, setValue] = React.useState('Значение');

<Group>
    <Input value={value} onValueChange={setValue} />
    <Button onClick={() => setValue('')}>Очистить</Button>
</Group>;
```

Примеры разных значений `type`:

```jsx harmony
import { Gapped, Input } '@inversecomponents'

<Gapped vertical gap={20}>
    <Gapped gap={20}>
        <Input type="password" />
        <span>type = "password"</span>
    </Gapped>

    <Gapped gap={20}>
        <Input type="number" />
        <span>type = "number"</span>
    </Gapped>

    <Gapped gap={20}>
        <Input type="tel" />
        <span>type = "tel"</span>
    </Gapped>

    <Gapped gap={20}>
        <Input type="search" />
        <span>type = "search"</span>
    </Gapped>

    <Gapped gap={20}>
        <Input type="time" />
        <span>type = "time"</span>
    </Gapped>

    <Gapped gap={20}>
        <Input type="date" />
        <span>type = "date"</span>
    </Gapped>

    <Gapped gap={20}>
        <Input type="url" />
        <span>type = "url"</span>
    </Gapped>

    <Gapped gap={20}>
        <Input type="email" />
        <span>type = "email"</span>
    </Gapped>
</Gapped>;
```
