---
layout: post
title: "Exploring the weight updation approach"
description: "Recall when you work with neural nets you do update weights after every iteration and while doing so you choose a particular algorithm to update the Parameters associated. So here I have discuused few of well known learning rules."
tags: [Deep Learning, Machine Learning]
use_math: true
---
## Exploring the Weight Updating approach

Neural Networks are function approximators that have achieved state-of-the-art accuracy in numerous machine learning tasks. Their great success in terms of accuracy is all about training the `net` with many samples (i.e- Updating the weight parameters) for every different tasks where its intended to be used.

### Asking the next question, Where did it all start?
The answer says "Updating weight according to architecture". The world of AI is known by supervised learning, unsupervised learning and reinforcement learning. They employ different learning rules for their weight updation and with varying situation they modify these rule so as to get better results. However their approach mainly starts with these rules:
 - Hebbian learning rule
 \begin{equation}
 \Delta W
 \end{equation}

 - Perceptron learning rule
 \begin{equation}
 \Delta W
 \end{equation}

 - Delta learning rule
 \begin{equation}
 \Delta W
 \end{equation}

 - Backpropagation learning rule
 \begin{equation}
 \Delta W
 \end{equation}

 - Stochastic learning rule
 \begin{equation}
 \Delta W
 \end{equation}

 - Competitive learning rule
 \begin{equation}
 \Delta W
 \end{equation}

 - Out star learning rule
 \begin{equation}
 \Delta W
 \end{equation}

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
