---
layout: post
title: "Fuzz about neural nets"
description: "Although neural nets have been with us since 1940's but somehow their usability is mostly recognised in this decades."
tags: [Deep Learning, Machine Learning]
use_math: true
---

The history of Neural network starts from 1943, when neurophysiologist Warren McCulloch and mathematician Walter Pitts wrote a [paper](https://doi.org/10.1007/BF02478259) on how neurons might work being inspired with the biological neuron unit. Rest we might have heared about Hebb network, Perceptron, Adaline & Madaline, Kohonen self-organizing map... etc and the list continues. Their approaches to using neural network with variations led to solving categories of problems. 

*Artificial Neural Network* has been a computation tool used by many in the domain of  Machine Learning where their is involvement of complex features and somehow at end, It all follows to *Deep Learning* problem set. **Ian Goodfellow**, **Yoshua Bengio** and **Aaron Courville** in their book [Deep Learning](https://www.deeplearningbook.org) put forward their view of the AI contrast to the early days, where it was viewed to rapidly tackle and solve problems that are intellectually difficult for human beings but relatively straight- forward for computers. Today, the challenge is to solve the tasks that are easy for people to perform but hard for people to describe formally—problems that we solve intuitively, that feel automatic, like recognizing spoken words or faces in images.

To understand how neural nets use the feature set to adjust the parameter, tune hyperparameters, and come at decision for the input signals assume a situation very commonly analysed in *Deep Learning* **"Boston house pricing"**, Where one has to predict the price of the house depending on various features given as problem set.

If its done without neural net, the code for predicting the price follows as such:

``` 
    #import boston dataset & linear regression model from scikit-learn library
    from sklearn.datasets import load_boston
    from sklearn.linear_model import LinearRegresion
    boston=load_boston()
    print(boston.data.shape)
    #split the dataset
    X=boston["data"]
    Y=boston["target"]
    train=X[:500][:]
    train_labels=Y[:500]
    test=X[-6:][:]
    test_labels=Y[-6:]
    #fit and train the linear regression model
    reg=LinearRegression(fit_intercept=True, normalize=True)
    reg.fit(train,train_labels)
    pred=reg.predict(test)
    #find the score
    reg.score(test,test_labels)

```
{: .language-python}

   Without using neural net a simple linear regression model stated above doesn't gives a satisfactory $$ R^2 $$ Score, Unless its hyperparameters are set according to the dataset. If the same situation is build upon a simple architecture of Linear regression neural network model.  An appreciable improvement and even a possibility for good $$R^2 \approx 0$$ is expected and this is totally taken care by neural nets if proper architecture is laid out.
   
## Then what the heck does neural nets do?
Considering the architecture of network, If a signal is able to trigger a threshold value '*$$ \theta $$*' then it propagates to next next layer of the network till output is generated. Here is a simple sketch introducing the idea that are considered when neural networks are used for any applications.

<div class="embed-responsive embed-responsive-16by9">
  <iframe src="https://www.youtube.com/embed/w9OFiOaTFs8" allowfullscreen></iframe>
</div>

The model of ANN are specified by the three basic entities namely:
1. the model's synaptic interconnections;
2. the training or learning rules adopted for updating and adjusting the connection weights;
3. their activation functions.

Using multiple neural layers to represent the complex hierarchy of concepts so as to learn comlicated concepts by building them on simplier concepts is the characteristerization of deep learning. The quintessential example of a deep learning model is the feedforward deep network or multilayer perceptron (MLP), And it starts with a general equation: **$$Y=\sum_i^n (W_i * X_i) + b$$**. Adjusting **weights**, **hyperparameters** and **optimization** are the spices that adds flavour to the recipe on the network. These neural networks acts as a magical computational tools for complex feature sets depending on the weight values acheived after no. of *epochs*.

So this is what the neural networks basically does. There are many works of other researches that explains the mathematical view of neural networks. These are a set of concepts that has been a fascinating area for every AI researcher due to its usuability in intutitive problems. Feel free to reach me in case you find out more about the "**nets**", untill then keep exploring.


