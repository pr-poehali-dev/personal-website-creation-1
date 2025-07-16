import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-sky-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-sky-50/90 backdrop-blur-sm border-b border-sky-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-900">
              Доктор Иванов А.С.
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-black transition-colors text-black">О себе</a>
              <a href="#research" className="hover:text-black transition-colors text-black">Исследования</a>
              <a href="#publications" className="hover:text-black transition-colors text-black">Публикации</a>
              <a href="#teaching" className="hover:text-black transition-colors text-black">Преподавание</a>
              <a href="#consulting" className="hover:text-black transition-colors text-black">Консалтинг</a>
              <a href="#blog" className="hover:text-black transition-colors text-black">Блог</a>
              <a href="#contact" className="hover:text-black transition-colors text-black">Контакты</a>
            </div>
            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={18} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/files/25e9b785-0181-4518-b54a-db5269ff1c05.png" 
              alt="Доктор Иванов А.С." 
              className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg"
            />
            <h1 className="text-5xl font-bold mb-6 text-black">
              Доктор Александр Иванов
            </h1>
            <p className="text-xl text-black/80 mb-8 leading-relaxed">
              Доктор наук, профессор кафедры прикладной математики и информатики.
              Специализируюсь на машинном обучении, анализе данных и искусственном интеллекте.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Badge variant="secondary" className="text-sm">Машинное обучение</Badge>
              <Badge variant="secondary" className="text-sm">Анализ данных</Badge>
              <Badge variant="secondary" className="text-sm">Искусственный интеллект</Badge>
              <Badge variant="secondary" className="text-sm">Нейронные сети</Badge>
            </div>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Icon name="FileText" size={18} className="mr-2" />
                Скачать CV
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                <Icon name="Mail" size={18} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-sky-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">О себе</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="GraduationCap" size={24} />
                    Образование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Докторская степень</h4>
                      <p className="text-muted-foreground">МГУ имени М.В. Ломоносова, 2015</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Магистратура</h4>
                      <p className="text-muted-foreground">МФТИ, 2008</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Award" size={24} />
                    Достижения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Премия РАН</h4>
                      <p className="text-muted-foreground">За выдающиеся исследования в области ИИ</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Грант РФФИ</h4>
                      <p className="text-muted-foreground">Руководитель проекта 2023-2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Исследования и проекты</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Brain" size={24} />
                  Нейронные сети
                </CardTitle>
                <CardDescription>
                  Разработка новых архитектур нейронных сетей для задач компьютерного зрения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="/img/92bfb621-95b5-4f27-9678-81d2c655132d.jpg" 
                  alt="Исследование нейронных сетей" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">Python</Badge>
                  <Badge variant="outline" className="text-xs">TensorFlow</Badge>
                  <Badge variant="outline" className="text-xs">PyTorch</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart" size={24} />
                  Анализ данных
                </CardTitle>
                <CardDescription>
                  Методы анализа больших данных в медицине и биоинформатике
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-32 bg-gradient-to-r from-primary/10 to-primary/20 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Database" size={32} className="text-primary" />
                </div>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">R</Badge>
                  <Badge variant="outline" className="text-xs">SQL</Badge>
                  <Badge variant="outline" className="text-xs">Pandas</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Cpu" size={24} />
                  Алгоритмы ИИ
                </CardTitle>
                <CardDescription>
                  Оптимизация алгоритмов машинного обучения для промышленных задач
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-32 bg-gradient-to-r from-secondary/20 to-secondary/30 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Settings" size={32} className="text-primary" />
                </div>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">C++</Badge>
                  <Badge variant="outline" className="text-xs">CUDA</Badge>
                  <Badge variant="outline" className="text-xs">OpenCV</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 px-6 bg-sky-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Публикации</h2>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="papers" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="papers">Статьи</TabsTrigger>
                <TabsTrigger value="books">Книги</TabsTrigger>
                <TabsTrigger value="conferences">Конференции</TabsTrigger>
              </TabsList>
              
              <TabsContent value="papers" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Deep Learning Approaches for Medical Image Analysis</h3>
                    <p className="text-muted-foreground mb-3">
                      Journal of Artificial Intelligence in Medicine, 2023
                    </p>
                    <div className="flex gap-2 mb-3">
                      <Badge variant="secondary">Q1</Badge>
                      <Badge variant="secondary">IF: 5.2</Badge>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="Download" size={16} className="mr-2" />
                      PDF
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Optimization of Neural Network Architectures</h3>
                    <p className="text-muted-foreground mb-3">
                      IEEE Transactions on Neural Networks, 2023
                    </p>
                    <div className="flex gap-2 mb-3">
                      <Badge variant="secondary">Q1</Badge>
                      <Badge variant="secondary">IF: 4.8</Badge>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="Download" size={16} className="mr-2" />
                      PDF
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="books">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Машинное обучение: теория и практика</h3>
                    <p className="text-muted-foreground mb-3">
                      Издательство "Наука", 2022
                    </p>
                    <Button variant="outline" size="sm">
                      <Icon name="Book" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="conferences">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">AI Applications in Healthcare</h3>
                    <p className="text-muted-foreground mb-3">
                      International Conference on Machine Learning, 2023
                    </p>
                    <Button variant="outline" size="sm">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Ссылка
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Преподавание</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" size={24} />
                  Курсы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold">Машинное обучение</h4>
                    <p className="text-blue-600 text-sm">Бакалавриат • 4 курс</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold">Искусственный интеллект</h4>
                    <p className="text-muted-foreground text-sm">Магистратура • 1 курс</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold">Анализ данных</h4>
                    <p className="text-muted-foreground text-sm">Бакалавриат • 3 курс</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" size={24} />
                  Научное руководство
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Аспиранты</span>
                    <Badge variant="secondary">8 человек</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Магистранты</span>
                    <Badge variant="secondary">12 человек</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Защищенные диссертации</span>
                    <Badge variant="secondary">15</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-sky-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Контакты</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Связаться со мной</CardTitle>
                <CardDescription>
                  Буду рад ответить на ваши вопросы и обсудить возможности сотрудничества
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea placeholder="Ваше сообщение" rows={4} />
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={20} />
                    <span>ivanov@university.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={20} />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={20} />
                    <span>МГУ, Факультет ВМК, к. 123</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Globe" size={20} />
                    <span>www.university.ru/ivanov</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-3">Социальные сети</h4>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      <Icon name="Github" size={16} />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Linkedin" size={16} />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Twitter" size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Доктор Александр Иванов. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;