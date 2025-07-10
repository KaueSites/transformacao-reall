"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  X,
  Star,
  Shield,
  ShoppingCart,
  Rocket,
  Brain,
  Utensils,
  Home,
  Heart,
  Lock,
  Download,
  Smartphone,
  Menu,
  Mail,
  MessageCircle,
} from "lucide-react"

export default function EbookSalesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showFloatingButton, setShowFloatingButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 800)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER FLUTUANTE */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold text-green-600">Método Real</div>

            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("metodo")}
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                O Método
              </button>
              <button
                onClick={() => scrollToSection("resultados")}
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Resultados
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("garantia")}
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Garantia
              </button>
            </nav>

            <Button
              onClick={() => scrollToSection("comprar")}
              className="hidden md:flex bg-green-600 hover:bg-green-700"
            >
              Quero Emagrecer Agora
            </Button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* SEÇÃO HERO */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Cansou de <span className="text-red-500">Fracassar</span> nas Dietas?
              </h1>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                <strong>Descubra o único método que funciona para quem já tentou de tudo:</strong> Emagreça 15-20kg em
                90 dias sem passar fome, sem academia cara e sem abrir mão da sua vida social.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Funciona mesmo se você já falhou 10 vezes",
                  "Sem dietas restritivas ou radicais",
                  "30 minutos por dia, no conforto de casa",
                  "Garantia total de 7 dias ou seu dinheiro de volta",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg font-medium text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <Button
                  onClick={() => scrollToSection("comprar")}
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Sim! Quero Emagrecer de Verdade
                </Button>

                <p className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2" />
                  <strong>Garantia total de 7 dias</strong> - Não funcionou? Devolvemos seu dinheiro
                </p>
              </div>
            </div>

            <div className="text-center relative">
              <div className="relative inline-block">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="eBook Emagrecimento Realista em 90 Dias"
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full">
                  <div className="text-center">
                    <div className="font-bold text-sm">+5.247 pessoas</div>
                    <div className="text-xs opacity-90">já emagreceram</div>
                  </div>
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO PROBLEMAS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Se Você Está Aqui, É Porque...
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Já tentou 5, 10, 15 dietas diferentes e sempre volta ao peso anterior (ou pior)",
              "Está cansado(a) de passar fome e viver contando calorias como um robô",
              "Não tem tempo nem dinheiro para academia e personal trainer",
              "Está perdendo a autoestima e evitando fotos e espelhos",
              "Sente que nada funciona e que você é o problema",
              "Quer emagrecer sem virar escravo de regras malucas e restrições",
            ].map((problem, index) => (
              <Card key={index} className="border-l-4 border-red-500 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">{problem}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gray-50 border-0">
            <CardContent className="p-8 text-center">
              <p className="text-xl font-semibold text-gray-800">
                <strong>A verdade é:</strong> O problema não é você. O problema são os métodos que você tentou até
                agora.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SEÇÃO SOBRE O MÉTODO */}
      <section id="metodo" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Apresento o "Emagrecimento Realista em 90 Dias"
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              <strong>O primeiro método criado especificamente para quem já tentou de tudo e fracassou.</strong> Baseado
              na vida real, para pessoas reais, com rotina real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Brain,
                title: "Planejamento Anti-Fracasso",
                description:
                  "Chega de planos impossíveis! Estratégias que se encaixam na sua rotina corrida, considerando trabalho, família e vida social. Funciona mesmo se você só tem 30 minutos livres por dia.",
              },
              {
                icon: Utensils,
                title: "Alimentação Inteligente",
                description:
                  "Aprenda o 'Método da Organização Inteligente' que permite uma alimentação equilibrada e sustentável, sem restrições extremas que fazem você desistir.",
              },
              {
                icon: Home,
                title: "Exercícios 'Preguiçosos'",
                description:
                  "Esqueça academia e equipamentos caros. Movimentos simples que você faz assistindo Netflix, no intervalo do trabalho ou brincando com as crianças.",
              },
              {
                icon: Heart,
                title: "Mentalidade Anti-Desistência",
                description:
                  "O segredo que ninguém conta: 90% do emagrecimento é mental. Técnicas comprovadas para manter o foco mesmo nos dias difíceis.",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-white shadow-xl">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Por Que Este Método é Diferente?</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Enquanto outros métodos prometem milagres impossíveis, o <strong>"Emagrecimento Realista"</strong> foi
                criado para a vida real. Testado por pessoas como você: mães ocupadas, pais de família, profissionais
                estressados que não têm tempo para complicação.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { number: "5.247", label: "Pessoas transformadas" },
                  { number: "87%", label: "Mantiveram o peso" },
                  { number: "17kg", label: "Perda média em 90 dias" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SEÇÃO RESULTADOS */}
      <section id="resultados" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Pessoas Reais, Resultados Reais</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              <strong>Estas pessoas eram exatamente como você:</strong> já tinham tentado de tudo, estavam desanimadas e
              achavam que nunca conseguiriam. Veja o que aconteceu em apenas 90 dias...
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Maria Santos, 34 anos",
                result: "-18kg em 90 dias",
                subtitle: "Mãe de 2 filhos, trabalha 8h por dia",
                quote:
                  "Já tinha tentado 7 dietas diferentes. Desta vez foi diferente: consegui emagrecer mantendo uma alimentação equilibrada e prazerosa!",
              },
              {
                name: "João Oliveira, 41 anos",
                result: "-20kg em 90 dias",
                subtitle: "Vendedor, viaja muito, come na rua",
                quote:
                  "Achei que era impossível emagrecer com minha rotina maluca. O método se adaptou à minha vida, não o contrário!",
              },
              {
                name: "Ana Costa, 28 anos",
                result: "-15kg em 90 dias",
                subtitle: "Enfermeira, trabalha em turnos",
                quote:
                  "Finalmente um método que entende que eu não posso viver de salada. Aprendi a me alimentar de forma inteligente!",
              },
            ].map((person, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 h-48">
                    <div className="relative bg-gray-200 rounded-tl-lg">
                      <img
                        src="/placeholder.svg?height=200&width=150"
                        alt="Antes"
                        className="w-full h-full object-cover rounded-tl-lg"
                      />
                      <Badge className="absolute top-2 left-2 bg-red-500">ANTES</Badge>
                    </div>
                    <div className="relative bg-gray-200 rounded-tr-lg">
                      <img
                        src="/placeholder.svg?height=200&width=150"
                        alt="Depois"
                        className="w-full h-full object-cover rounded-tr-lg"
                      />
                      <Badge className="absolute top-2 left-2 bg-green-500">DEPOIS</Badge>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">{person.name}</h4>
                    <p className="text-green-600 font-bold mb-2">{person.result}</p>
                    <p className="text-sm text-gray-600 mb-4 italic">{person.subtitle}</p>
                    <blockquote className="text-gray-700 italic bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                      "{person.quote}"
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold text-gray-800 mb-6">
              <strong>Quer ser o próximo caso de sucesso?</strong>
            </p>
            <Button onClick={() => scrollToSection("comprar")} size="lg" className="bg-green-600 hover:bg-green-700">
              Quero Meus Resultados Também
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO DEPOIMENTOS */}
      <section id="depoimentos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">O Que Dizem Quem Já Tentou de Tudo</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              <strong>Mais de 5.000 pessoas já transformaram suas vidas.</strong> Veja o que elas falam sobre finalmente
              encontrar algo que funciona...
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Carla Santos, 38 anos",
                result: "Perdeu 18kg e manteve",
                quote:
                  "Eu era a rainha do efeito sanfona. Emagrecia 8kg, engordava 12kg. Já tinha gastado mais de R$ 3.000 em dietas, shakes e academias. Quando vi este método pensei: 'mais uma furada'. Mas por R$ 33,90 resolvi tentar... MELHOR DECISÃO DA MINHA VIDA! Perdi 18kg em 3 meses e o mais importante: não voltei a engordar. Já faz 8 meses!",
              },
              {
                name: "Roberto Silva, 42 anos",
                result: "Perdeu 20kg em casa",
                quote:
                  "Sou pai de 3 filhos, trabalho 10h por dia. Minha esposa vivia falando para eu emagrecer, mas eu não tinha tempo nem energia. Tentei academia: durei 2 semanas. Tentei dieta: durei 1 semana. Este método mudou tudo: 30 minutos por dia, em casa, sem equipamento. Em 90 dias perdi 20kg. Meus filhos ficaram orgulhosos do pai!",
              },
              {
                name: "Fernanda Costa, 31 anos",
                result: "Perdeu 15kg e recuperou autoestima",
                quote:
                  "Eu odiava meu corpo. Evitava espelhos, fotos, praia... Já tinha tentado: jejum intermitente, low carb, dieta da lua, shake de emagrecimento. Nada funcionava a longo prazo. Este método me ensinou que o problema não era eu, eram os métodos impossíveis que eu tentava. Emagreci 15kg sem sofrimento e recuperei minha autoestima!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-4">
                    <img
                      src="/placeholder.svg?height=50&width=50"
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-green-600 font-medium text-sm">{testimonial.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO GARANTIA */}
      <section id="garantia" className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <Shield className="w-24 h-24 text-white opacity-90" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Garantia Blindada de 7 Dias</h2>
              <p className="text-xl mb-6 opacity-90">
                <strong>
                  Estamos tão confiantes que este método vai funcionar para você, que assumimos todo o risco.
                </strong>
              </p>
              <p className="text-lg mb-8 opacity-90">
                Compre hoje, teste por 7 dias completos. Se por qualquer motivo não ficar satisfeito(a), basta enviar um
                email e devolvemos 100% do seu dinheiro.
              </p>
              <div className="space-y-4">
                {["7 dias completos para testar", "Reembolso de 100% do valor", "Sem perguntas, sem burocracia"].map(
                  (feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-6 h-6 text-green-300" />
                      <span className="text-lg font-medium">{feature}</span>
                    </div>
                  ),
                )}
              </div>
              <p className="text-lg italic opacity-80 mt-6">
                Você não tem nada a perder, exceto o peso que tanto te incomoda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO CTA FINAL */}
      <section id="comprar" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Sua Última Tentativa Pode Ser a Definitiva
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
            <strong>Pare de tentar métodos que não funcionam.</strong> Comece hoje o único sistema criado para quem já
            fracassou antes e quer uma solução real, definitiva e que funciona na vida real.
          </p>

          <Card className="max-w-4xl mx-auto mb-12 shadow-xl">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Você poderia gastar:</h4>
                  <div className="space-y-2">
                    {[
                      { item: "Personal Trainer", price: "R$ 200/mês" },
                      { item: "Nutricionista", price: "R$ 150/consulta" },
                      { item: "Academia", price: "R$ 80/mês" },
                      { item: "Suplementos", price: "R$ 300/mês" },
                    ].map((expense, index) => (
                      <div key={index} className="flex justify-between border-b pb-2">
                        <span>{expense.item}</span>
                        <span className="font-medium">{expense.price}</span>
                      </div>
                    ))}
                    <div className="flex justify-between pt-4 border-t-2 border-red-500 text-red-600 font-bold">
                      <span>Total:</span>
                      <span>R$ 730/mês</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">VS</div>
                </div>

                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Ou investir apenas:</h4>
                  <div className="space-y-2">
                    <div className="text-gray-500 line-through">De R$ 97,00</div>
                    <div className="text-4xl font-bold text-green-600">R$ 33,90</div>
                    <div className="text-sm text-gray-600">Pagamento único • Acesso imediato</div>
                    <div className="text-green-600 font-semibold">Economia de R$ 696+ por mês!</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse"
          >
            <ShoppingCart className="w-6 h-6 mr-3" />
            SIM! Quero Emagrecer de Verdade por R$ 33,90
          </Button>

          <Card className="max-w-2xl mx-auto mt-8 bg-gray-50">
            <CardContent className="p-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Você vai receber hoje:</h4>
              <ul className="space-y-3 text-left">
                {[
                  "Plano alimentar flexível e sustentável",
                  "Exercícios para fazer em casa (30 min/dia)",
                  "Guia de motivação anti-desistência",
                  "Garantia total de 7 dias",
                  "Suporte por email",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-center space-x-8 mt-8 flex-wrap gap-4">
            {[
              { icon: Lock, text: "Compra 100% Segura" },
              { icon: Download, text: "Acesso Imediato" },
              { icon: Smartphone, text: "Funciona no Celular" },
            ].map((badge, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-600">
                <badge.icon className="w-5 h-5 text-green-500" />
                <span className="font-medium">{badge.text}</span>
              </div>
            ))}
          </div>

          <p className="text-lg font-semibold text-gray-800 italic mt-8">
            <strong>Não deixe mais um ano passar com você insatisfeito(a) com seu corpo.</strong> Sua transformação
            começa hoje, com um clique.
          </p>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Método Real</h3>
              <p className="text-gray-300 mb-4">
                Transformando vidas através do único método de emagrecimento criado para quem já tentou de tudo e
                fracassou.
              </p>
              <p className="text-white font-semibold">Mais de 5.000 pessoas já transformaram suas vidas.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Links Importantes</h4>
              <ul className="space-y-2">
                {["Termos de Uso", "Política de Privacidade", "Contato", "Suporte"].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <div className="space-y-2">
                <p className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-2" />
                  suporte@metodorealemagrecer.com
                </p>
                <p className="flex items-center text-gray-300">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  (11) 99999-9999
                </p>
                <p className="text-white font-semibold">Respondemos em até 24h</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Método Real. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">
              Este produto não substitui orientação médica. Consulte sempre um profissional de saúde.
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE */}
      {showFloatingButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => scrollToSection("comprar")}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Emagrecer por R$ 33,90
          </Button>
        </div>
      )}
    </div>
  )
}
