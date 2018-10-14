---
layout: post
title: "Exploring the weight updation approach"
description: "Recall when you work with neural nets you do update weights after every iteration and while doing so you choose a particular algorithm to update the Parameters associated. So here I have discuused few of well known learning rules."
tags: [Deep Learning, Machine Learning]
use_math: true
---
## Exploring the Weight Updating approach

Neural Networks are function approximators that have achieved state-of-the-art accuracy in numerous machine learning tasks. Their great success in terms of accuracy is all about training the `net` with many samples (i.e- Updating the weight parameters) for every different tasks where its intended to be used. Conventionally, It is stated that $$W_{ij}$$= weight connection from `neuron j` to `neuron i`.

### Asking the next question, Where did it all start?
The answer says "Updating weight according to architecture". The world of AI is known by supervised learning, unsupervised learning and reinforcement learning. They employ different learning rules for their weight updation and with varying situation they modify these rule so as to get better results. However their approach mainly starts with these rules:

 - **Hebbian learning rule**<br/>
 Classical Hebb rule indicates "neurons that fire together, wire together".
 \begin{equation}
 \Delta W = x * Y
 \end{equation}

 - **Perceptron learning rule**<br/>
 update when $$y \neq Y$$
 \begin{equation}
 \Delta W = \alpha * Y * x
 \end{equation}

 - **Delta learning rule**<br/>
 calculate error $$\delta = Y - y$$
 \begin{equation}
 \Delta W = \alpha * \delta * x
 \end{equation}

 - **Backpropagation learning rule**<br/>
It is also a Generalised Delta Rule, where error is backpropagated from output layer to hidden layer and weight is updated in backward pass.
 \begin{equation}
 \Delta W_{ij} = - \eta \frac {\partial E}{\partial w_{ij}}
 \end{equation}
<u>Simplified representation in MLP</u>,<br/>
$$input_{k} \longrightarrow hidden_{j} \longrightarrow output_{i}$$<br/>
*for output layer*, weights connected to output neuron i<br/>
	$$\frac {\partial E}{\partial w_{ij}} = \delta_{o_i} * out_{h_i}$$<br/>
	$$\delta_{o_i} = (target_{o_i} - out_{o_i}) * out_{o_i}(1-out_{o_i})$$<br/>
*for hidden layer*, weights connected to hidden neuron j<br/>
	$$\frac {\partial E}{\partial w_{jk}} = \delta_{h_j} * input_{k}$$<br/>
	$$\delta_{h_j} = (\sum \delta_{o_i} * w_{h_{j}o_{i}}) * out_{h_j}(1-out_{h_j})$$<br/>
Refer to this [solved numerical exmaple](https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/) for a better grasp.

 - **Stochastic learning rule**
 This learning is employed in Boltzmann Machine, Cauchy Machine and Hopfield Nets Machine. Stochastic is the random variation included in the network. A popular varation of such learning is Stochatic Gradient Descent (SGD) Rule. A simplified [explanation to Gradient Descent optimization algorithm](https://machinelearning-blog.com/2018/02/28/gradient-descent/#more-435) and It is different from Batch (Vanilla) Gradient Descent. [Read It here](https://towardsdatascience.com/difference-between-batch-gradient-descent-and-stochastic-gradient-descent-1187f1291aa1). 
 \begin{equation}
 \text {Error/Cost function }\theta(parameter = weights) = \frac {1}{samples} \sum^{samples} (Y - y)^2
 \end{equation}
 This learning rule is to minimise $$\theta$$.<br/>
 i.e $$\frac {\partial \theta}{\partial \theta_{\text {(each sample)}}}$$

 - **Competitive learning rule**
 This learning approach is refered as "winner-takes-all". Here during training, the output unit "i" that provides the highest activation to a given input pattern is declared the "weights of the winner" and is moved closer to the input pattern, whereas the rest of the neurons are left unchanged"
 \begin{equation}
 \Delta W_{i} = \eta * x_{(pattern)}
 \end{equation}
 Instar learning rule and Outstar learning rule governs the dynamics of feedback connection weights in a standard competitive neural network in an unsupervised manner. Such learning rules are a part of Kohonen neural Network.


`Reinforcement Learning` is a learning to act in order to maximise the future reward. This field has evolved a lot since the use of deep learning.
<div class="embed-responsive embed-responsive-16by9">
  <iframe src="https://www.youtube.com/embed/JgvyzIkgxF0" allowfullscreen></iframe>
</div>

Resource to [explore further](https://skymind.ai/wiki/deep-reinforcement-learning#reading).

### A thought to explore:
Published at [ICLR](https://iclr.cc) 2017, Paper titled ["Introspection: Accelerating Neural Network training by learning weight evolution"](https://arxiv.org/abs/1704.04959) presents their proposal to allow a neural network to learn the training pattern in a task and utilize it to other similiar tasks. The issue to tackle is the large training time involved that makes the neural nets difficult to use in other various tasks. In this paper, the authors explore the idea of learning weight evolution pattern from a simple network for accelerating training of novel neural networks.
The conclusion of this paper briefly goes as:

>A neural network `N` is used to learn a general trend in weight evolution of a simple neural network and using it to update weights of many deep neural nets on 3 different tasks - MNIST, CIFAR-10, and ImageNet, with varying network architectures, activations, optimizers, and normalizing strategies. Using the introspection network `N` led to faster convergence compared to existing methods in all the cases also utilising small memory footprint.

The Conclusion and results indicated in the above `titled paper` suggests the existence of a general underlying pattern in the weight evolution of any neural network. 

Final words "To open a lock, you need `right key`. If you allow a locksmith to have a `reference`, he will deliver you the key `faster.`". Context to "reference" here is <u>pattern to update weight.</u>
