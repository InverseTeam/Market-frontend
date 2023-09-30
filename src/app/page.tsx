import { Button } from '@/entities/button';
import Pluc from '../../public/plus-16-light.svg';
import { Input } from '@/entities/input';
import Loupe from '../../public/search-loupe.svg';
import X from '../../public/x.svg';
import { Radio } from '@/entities/radio';
import { TextArea } from '@/entities/textArea';

export default function Home() {
    const bgStyle = {
        backgroundImage: `linear-gradient(to right, rgba(130, 130, 130, 0.5) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(130, 130, 130, 0.5) 1px, transparent 1px)`,
        backgroundSize: `16px 16px`,
        backgroundPosition: `-8px -8px`,
        padding: 16,
        display: 'flex',
        gap: '16px',
    };

    return (
        <>
            <div style={{ padding: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Radio value="Текст" />
                <Radio error value="Текст" />
                <Radio warning value="Текст" />
                <Radio size="medium" value="Текст" />
                <Radio size="large" value="Текст" />
            </div>
            <div style={bgStyle}>
                <Radio value="Текст" />
                <Radio error value="Текст" />
                <Radio warning value="Текст" />
                <Radio size="medium" value="Текст" />
                <Radio size="large" value="Текст" />
            </div>
            <div style={{ padding: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Button>Default</Button>
                <Button loading>Default</Button>
                <Button size="medium">Default</Button>
                <Button size="large">Default</Button>
                <Button use="custom">Custom</Button>
                <Button use="text">Text</Button>
                <Button icon={Pluc}>Text</Button>
                <Button loading icon={Pluc}>
                    Text
                </Button>
            </div>
            <div style={bgStyle}>
                <Button>Default</Button>
                <Button loading>Default</Button>
                <Button size="medium">Default</Button>
                <Button size="large">Default</Button>
                <Button use="custom">Custom</Button>
                <Button use="text">Text</Button>
                <Button icon={Pluc}>Text</Button>
                <Button loading icon={Pluc}>
                    Text
                </Button>
            </div>
            <div style={{ padding: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Input mask="99/999/99" />
                <Input size="medium" mask="99/999/99" />
                <Input size="large" mask="99/999/99" />
            </div>
            <div style={bgStyle}>
                <Input placeholder="За Родину" rightIcon={X} leftIcon={Loupe} />
                <Input size="medium" placeholder="За Родину" rightIcon={X} leftIcon={Loupe} />
                <Input size="large" placeholder="За Родину" rightIcon={X} leftIcon={Loupe} />
            </div>
            <div style={{ padding: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <TextArea placeholder="Используйте многострочное поле для ввода больших текстов" />
                <TextArea
                    size="medium"
                    placeholder="Используйте многострочное поле для ввода больших текстов"
                />
                <TextArea
                    size="large"
                    placeholder="Используйте многострочное поле для ввода больших текстов"
                />
                <TextArea
                    disabled
                    placeholder="Используйте многострочное поле для ввода больших текстов"
                />
            </div>
            <div style={bgStyle}>
                <TextArea placeholder="Используйте многострочное поле для ввода больших текстов" />
                <TextArea
                    size="medium"
                    placeholder="Используйте многострочное поле для ввода больших текстов"
                />
                <TextArea
                    size="large"
                    placeholder="Используйте многострочное поле для ввода больших текстов"
                />
                <TextArea
                    disabled
                    placeholder="Используйте многострочное поле для ввода больших текстов"
                />
            </div>
        </>
    );
}
