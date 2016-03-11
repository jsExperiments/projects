require 'sinatra';

get '/' do
    File.read("index.html")
end

get '/flex1' do
    File.read("flex1.html")
end

get '/flex2' do
    File.read("flex2.html")
end

get '/calc' do 
    File.read('calc.html')
end    

get '/newcalc' do
    File.read('newcalc.html')
end

get '/calc3' do
    File.read('calc3.html')
end

get '/calc4' do
    File.read('calc4.html')
end

get '/calcmock' do
    File.read('calcmock.html')
end

get '/googleClone' do
    File.read('googleClone.html')
end

get '/googleClone2' do
    File.read('googleClone2.html')
end

get '/googleClone3' do
    File.read('googleClone3.html')
end

get '/todo' do
    File.read('todo.html')
end